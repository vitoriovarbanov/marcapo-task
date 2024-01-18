import type { Book } from '../types';

export type BookFormProps = {
    onAddNewBookNavigate?: () => void;
    bookData?: Book;
};
