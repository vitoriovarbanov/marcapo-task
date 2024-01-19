import type { Dayjs } from 'dayjs';

interface ImageFile {
    uid: string;
    name: string;
    status: string;
    url?: string;
    originFileObj?: File;
}

export type Book = {
    id: string;
    name: string;
    author: string;
    publishingYear?: Dayjs | null;
    genre?: string;
    numberOfPages?: number | null;
    image?: ImageFile[];
    description?: string;
};
