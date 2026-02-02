import axios, { AxiosInstance, AxiosError } from 'axios';
import CryptoJS from 'crypto-js';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const USER_SECRET = import.meta.env.VITE_USER_SECRET;

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Fungsi Helper untuk format Tanggal sesuai standar Backend Perusahaan
 * Format: YYYY-MM-DD HH:mm:ss
 */

const getTimestamp = () => {
  const d = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
         `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};

// --- REQUEST INTERCEPTOR ---
apiClient.interceptors.request.use((config) => {
  const timestamp = getTimestamp();
  const token = localStorage.getItem('token');
  const uniqueId = localStorage.getItem('uniqueId') || 'SYSTEM';
  
  // Ambil path tanpa base URL untuk signature
  const urlPath = config.url || '';
  const method = config.method?.toUpperCase() || 'POST';

  /**
   * GENERATE SIGNATURE
   * Rumus: METHOD|PATH|TIMESTAMP
   * Note: Pastikan urutan ini sama dengan middleware validateSignature di backend
   */
  const signaturePayload = `${method}|${urlPath}|${timestamp}`;
  const signature = CryptoJS.HmacSHA512(signaturePayload, USER_SECRET).toString();

  // Injeksi Headers Keamanan
  if (config.headers) {
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['x-timestamp'] = timestamp;
    config.headers['x-signature'] = signature;
    config.headers['x-uniqueid'] = uniqueId;
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

// --- RESPONSE INTERCEPTOR ---
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Jika Token Expired atau Tidak Valid (401)
    if (error.response?.status === 401) {
      console.warn("Session expired or unauthorized. Redirecting to login...");
      localStorage.clear();
      window.location.href = '/'; // Lempar ke landing page
    }
    return Promise.reject(error);
  }
);

export default apiClient;