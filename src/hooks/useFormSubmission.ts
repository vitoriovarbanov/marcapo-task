import { useState } from 'react';
import type { Book } from '../types';

interface FormSubmissionHook {
    formFields: Book;
    setFormField: (field: string, value: string | number | null) => void;
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

    const setFormField = (field: string, value: string | number | null) => {
        setFormFields((prevFields) => ({ ...prevFields, [field]: value }));
    };

    console.log(formFields);

    const submitForm = () => {
        const result = { ...formFields };
        // You can perform any additional logic here before submitting

        console.log('Form Submitted:', result);
        //bookStore.submitForm();

        // Add logic to save or update the data, e.g., using MobX store or making an API call
    };

    return {
        formFields,
        setFormField,
        submitForm,
    };
};
