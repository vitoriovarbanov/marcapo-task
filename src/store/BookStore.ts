import { makeAutoObservable } from 'mobx';
import type { BookFormData, Book } from '../types';

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

        const storedBookList = localStorage.getItem('bookList');

        if (storedBookList) {
            this.bookList = JSON.parse(storedBookList);
        }
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

    submitForm(result: Book): void {
        const newBook: Book = {
            ...result,
            id: this.bookList.length.toString(),
        };

        this.bookList = [...this.bookList, newBook];
        this.resetForm();

        localStorage.setItem('bookList', JSON.stringify(this.bookList));
    }

    getBookById(bookId: string): Book | undefined {
        return this.bookList.find((book) => book.id === bookId);
    }
}

const bookStore = new BookStore();
export default bookStore;
