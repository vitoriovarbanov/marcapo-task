import type { Dayjs } from 'dayjs';

export type BookFormData = {
    name: string;
    author: string;
    publishingYear?: Dayjs | null;
    genre?: string;
    numberOfPages?: number | null;
    image?: string;
    description?: string;
};
