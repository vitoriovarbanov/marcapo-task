import type { Book, UploadFileList } from '../types';
import { message } from 'antd';
import type { Dayjs } from 'dayjs';

export const imageUploadUtil = async (
    formFields: Book,
    setFormField: (field: string, value: string | number | Dayjs | null | UploadFileList) => void
) => {
    if (formFields.image && formFields.image.length > 0) {
        const formData = new FormData();

        // Append each file to the FormData
        formFields.image.forEach((file) => {
            formData.append('file', file.originFileObj);
        });

        // Upload image to the server
        try {
            const response = await fetch('http://localhost:3001/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                message.success('Image uploaded successfully');
            } else {
                message.error('Image upload failed');
                return; // Stop further processing if image upload fails
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            message.error('Image upload failed');
            return; // Stop further processing if image upload fails
        }

        setFormField('image', []);
    }
};
