import { useEffect, useState } from 'react';
import type { Book } from '../types';
import type { Dayjs } from 'dayjs';
import bookStore from '../store/BookStore';
import { message } from 'antd';

interface FormSubmissionHook {
    formFields: Book;
    setFormField: (field: string, value: string | number | Dayjs | null) => void;
    handleCreate: () => void;
    handleEdit: () => void;
}

export const useFormSubmission = (bookData?: Book): FormSubmissionHook => {
    const [formFields, setFormFields] = useState<Book>(
        bookData || {
            id: '',
            name: '',
            author: '',
            publishingYear: null,
            genre: '',
            numberOfPages: null,
            image: '',
            description: '',
        }
    );

    useEffect(() => {
        setFormFields((prevFields) => ({ ...prevFields, ...bookData }));
    }, [bookData]);

    const setFormField = (field: string, value: string | number | Dayjs | null) => {
        setFormFields((prevFields) => ({ ...prevFields, [field]: value }));
    };

    const handleEdit = (): void => {
        const updatedBook = { ...formFields };
        // Perform validation or additional logic if needed before saving
        bookStore.updateBook(bookData.id, updatedBook);
        message.success('Book details updated successfully!');
    };

    const handleCreate = () => {
        const result = { ...formFields };
        // You can perform any additional logic here before submitting

        bookStore.submitForm(result);

        // Add logic to save or update the data, e.g., using MobX store or making an API call
    };

    return {
        formFields,
        setFormField,
        handleCreate,
        handleEdit,
    };
};
