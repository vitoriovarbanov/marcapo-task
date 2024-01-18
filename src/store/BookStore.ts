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

    updateBook(bookId: string, updatedBook: Book): void {
        const index = this.bookList.findIndex((book) => book.id === bookId);

        if (index !== -1) {
            // Update the book in the store
            this.bookList[index] = { ...this.bookList[index], ...updatedBook };

            // Update the book in local storage
            this.updateLocalStorage();

            // You can add any additional logic or triggers here
        }
    }

    deleteBook(bookId: string): void {
        this.bookList = this.bookList.filter((book) => book.id !== bookId);
        this.deleteBookFromLocalStorage(bookId);
    }

    deleteBookFromLocalStorage(bookId: string): void {
        const storedBooks = JSON.parse(localStorage.getItem('bookList') || '[]') as Book[];

        // Find the index of the book in local storage
        const index = storedBooks.findIndex((book) => book.id === bookId);

        if (index !== -1) {
            // Remove the book from local storage
            storedBooks.splice(index, 1);

            // Update local storage with the modified book list
            localStorage.setItem('bookList', JSON.stringify(storedBooks));
        }
    }

    private updateLocalStorage(): void {
        // Update the entire bookList in local storage
        localStorage.setItem('bookList', JSON.stringify(this.bookList));
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
