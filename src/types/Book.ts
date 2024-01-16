export type Book = {
    id: number;
    name: string;
    author: string;
    publishingYear?: number | null;
    genre?: string;
    numberOfPages?: number | null;
    image?: string;
    description?: string;
};
