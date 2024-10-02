import { Book, Genre } from './Book';

class Library {
    private books: Book[] = [];
    private idCounter: number = 1;

    // Add a new book
    addBook(title: string, author: string, genre: Genre, publishedYear: number, isAvailable: boolean): void {
        const newBook: Book = {
            id: this.idCounter++,
            title,
            author,
            genre,
            publishedYear,
            isAvailable,
        };
        this.books.push(newBook);
        console.log(`Book "${newBook.title}" added successfully.`);
    }

    // Update book details
    updateBook(id: number, updatedDetails: Partial<Book>): void {
        const book = this.books.find(b => b.id === id);
        if (book) {
            Object.assign(book, updatedDetails);
            console.log(`Book with ID ${id} updated successfully.`);
        } else {
            console.log(`Book with ID ${id} not found.`);
        }
    }

    // Delete a book by ID
    deleteBook(id: number): void {
        const bookIndex = this.books.findIndex(b => b.id === id);
        if (bookIndex !== -1) {
            const removedBook = this.books.splice(bookIndex, 1);
            console.log(`Book "${removedBook[0].title}" deleted successfully.`);
        } else {
            console.log(`Book with ID ${id} not found.`);
        }
    }

    // Search books by criteria
    searchBooks(criteria: Partial<Book>): void {
        const results = this.books.filter(book => {
            return Object.keys(criteria).every(key => (book as any)[key] === (criteria as any)[key]);
        });
        if (results.length > 0) {
            console.log("Search Results:", results);
        } else {
            console.log("No books match your search criteria.");
        }
    }

    // Display all books
    displayBooks(): void {
        if (this.books.length > 0) {
            console.log("Book Inventory:");
            this.books.forEach(book => console.log(book));
        } else {
            console.log("No books available.");
        }
    }
}

export { Library };
