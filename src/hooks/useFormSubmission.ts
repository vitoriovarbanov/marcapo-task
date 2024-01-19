import { useEffect, useState } from 'react';
import type { Book, UploadFileList } from '../types';
import type { Dayjs } from 'dayjs';
import bookStore from '../store/BookStore';
import { message } from 'antd';
interface FormSubmissionHook {
    formFields: Book;
    setFormField: (field: string, value: string | number | Dayjs | null | UploadFileList) => void;
    handleCreate: () => void;
    handleEdit: () => void;
    handleDelete: (id: string) => void;
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
            image: [],
            description: '',
        }
    );

    useEffect(() => {
        setFormFields((prevFields) => ({ ...prevFields, ...bookData }));
    }, [bookData]);

    const setFormField = (field: string, value: string | number | Dayjs | null) => {
        setFormFields((prevFields) => ({ ...prevFields, [field]: value }));
    };

    const handleCreate = () => {
        const result = { ...formFields };
        bookStore.submitForm(result);

        message.success('Book created successfully!');
    };

    const handleEdit = (): void => {
        const updatedBook = { ...formFields };
        // Perform validation or additional logic if needed before saving
        bookStore.updateBook(bookData.id, updatedBook);
        message.success('Book details updated successfully!');
    };

    const handleDelete = (id: string): void => {
        bookStore.deleteBook(id);
        message.success('Book deleted successfully!');
    };

    return {
        formFields,
        setFormField,
        handleCreate,
        handleEdit,
        handleDelete,
    };
};
