import type { Book } from '../types';

export type BookFormProps = {
    onNavigate?: () => void;
    bookData?: Book;
};
