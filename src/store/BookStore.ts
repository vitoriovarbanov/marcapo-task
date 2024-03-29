import { makeAutoObservable } from 'mobx';
import type { BookFormData, Book } from '../types';

class BookStore {
    bookFormData: BookFormData = {
        name: '',
        author: '',
        publishingYear: null,
        genre: '',
        numberOfPages: null,
        image: [],
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

    updateBook(bookId: string, updatedBook: Book): void {
        const index = this.bookList.findIndex((book) => book.id === bookId);

        if (index !== -1) {
            this.bookList[index] = { ...this.bookList[index], ...updatedBook };

            this.updateLocalStorage();
        }
    }

    deleteBook(bookId: string): void {
        this.bookList = this.bookList.filter((book) => book.id !== bookId);
        this.deleteBookFromLocalStorage(bookId);
    }

    deleteBookFromLocalStorage(bookId: string): void {
        const storedBooks = JSON.parse(localStorage.getItem('bookList') || '[]') as Book[];

        const index = storedBooks.findIndex((book) => book.id === bookId);

        if (index !== -1) {
            storedBooks.splice(index, 1);
            localStorage.setItem('bookList', JSON.stringify(storedBooks));
        }
    }

    private updateLocalStorage(): void {
        localStorage.setItem('bookList', JSON.stringify(this.bookList));
    }

    setImageUrl(url: string): void {
        this.bookFormData.image[0].url = url;
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
            image: [],
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
