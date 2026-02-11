import axios from 'axios';

export async function postFormData(endpoint: string, formData: FormData) {
    try {
        const response = await axios.post(
            process.env.NEXT_PUBLIC_API_DIR_FORMDATA_PATH!,
            formData,
            {
                headers: { 'X-ENDPOINT': endpoint }
            }
        );
        return response.data;
    } catch (error: any) {
        throw error;
    }
}