import type { Book } from './Book';
import type { BookFormData } from './BookFormData';

export type BookStore = {
    bookFormData: BookFormData;
    bookList: Book[];
    setImageUrl(url: string): void;
    setFormField(field: string, value: string | number | null): void;
    resetForm(): void;
    submitForm(): void;
};
