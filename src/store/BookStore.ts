import { makeAutoObservable } from 'mobx';
import type { BookFormData, Book } from '../types';
import { v4 as uuidv4 } from 'uuid';

class BookStore {
    bookFormData: BookFormData = {
        name: '',
        author: '',
        publishingYear: null,
        genre: '',
        numberOfPages: null,
        image: '',
        description: '',
    };

    bookList: Book[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setImageUrl(url: string): void {
        this.bookFormData.image = url;
    }

    setFormField(field: string, value: string | number | null): void {
        this.bookFormData[field] = value;
    }

    resetForm(): void {
        this.bookFormData = {
            name: '',
            author: '',
            publishingYear: null,
            genre: '',
            numberOfPages: null,
            image: '',
            description: '',
        };
    }

    submitForm(): void {
        const newBook: Book = {
            id: uuidv4(), // Assign a unique ID (for simplicity, incrementing length)
            ...this.bookFormData,
        };

        this.bookList = [...this.bookList, newBook];
        this.resetForm();
    }

    getBookById(bookId: string): Book | undefined {
        return this.bookList.find((book) => book.id === bookId);
    }
}

const bookStore = new BookStore();
export default bookStore;
