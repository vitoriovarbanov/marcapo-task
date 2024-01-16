import type { Moment } from 'moment';

export type Book = {
    id: string;
    name: string;
    author: string;
    publishingYear?: Moment | null;
    genre?: string;
    numberOfPages?: number | null;
    image?: string;
    description?: string;
};
