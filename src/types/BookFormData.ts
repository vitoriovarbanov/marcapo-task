import type { Dayjs } from 'dayjs';

interface ImageFile {
    uid: string;
    name: string;
    status: string;
    url?: string;
    originFileObj?: File;
}

export type BookFormData = {
    name: string;
    author: string;
    publishingYear?: Dayjs | null;
    genre?: string;
    numberOfPages?: number | null;
    image?: ImageFile[];
    description?: string;
};
