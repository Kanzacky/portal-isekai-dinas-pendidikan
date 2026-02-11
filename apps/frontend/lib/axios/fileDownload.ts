import axios from 'axios';

export async function downloadFile(endpoint: string, data = {}, fileName = "report") {
    try {
        const response = await axios.post('/api/interceptor_download', data, {
            headers: { 'X-ENDPOINT': endpoint },
            responseType: 'blob' 
        });

        // Buat URL sementara untuk file biner
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        
        // Atur nama file
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        
        // Bersihkan memori
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Download Error:", error);
    }
}