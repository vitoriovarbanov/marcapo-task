import type { Dayjs } from 'dayjs';
import type { ImageFile } from './FileUpload';

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
