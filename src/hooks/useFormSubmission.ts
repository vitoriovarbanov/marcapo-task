import { useState } from 'react';
import type { Book } from '../types';
import type { Dayjs } from 'dayjs';
import bookStore from '../store/BookStore';

interface FormSubmissionHook {
    formFields: Book;
    setFormField: (field: string, value: string | number | Dayjs | null) => void;
    submitForm: () => void;
}

export const useFormSubmission = (): FormSubmissionHook => {
    const [formFields, setFormFields] = useState<Book>({
        id: '',
        name: '',
        author: '',
        publishingYear: null,
        genre: '',
        numberOfPages: null,
        image: '',
        description: '',
    });

    const setFormField = (field: string, value: string | number | Dayjs | null) => {
        setFormFields((prevFields) => ({ ...prevFields, [field]: value }));
    };

    const submitForm = () => {
        const result = { ...formFields };
        // You can perform any additional logic here before submitting

        bookStore.submitForm(result);

        // Add logic to save or update the data, e.g., using MobX store or making an API call
    };

    return {
        formFields,
        setFormField,
        submitForm,
    };
};
