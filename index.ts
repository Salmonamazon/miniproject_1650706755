import { Library } from './Library';
import { Genre } from './Book';
import * as readline from 'readline';

// Initialize CLI interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const library = new Library();

// CLI menu options
function showMenu() {
    console.log(`
    Welcome to the Book Inventory Management System!
    1. Add a new book
    2. Update book details
    3. Delete a book
    4. Search for books
    5. Display all books
    6. Exit
    `);
    rl.question("Choose an option: ", (option: string) => {
        handleMenuOption(parseInt(option));
    });
}

// Handle user selection
function handleMenuOption(option: number) {
    switch (option) {
        case 1:
            rl.question("Enter book title: ", (title) => {
                rl.question("Enter author: ", (author) => {
                    rl.question("Enter genre (0: Fiction, 1: NonFiction, 2: Mystery, 3: SciFi, 4: Biography): ", (genre) => {
                        rl.question("Enter published year: ", (year) => {
                            rl.question("Is the book available? (true/false): ", (available) => {
                                library.addBook(title, author, parseInt(genre), parseInt(year), available === "true");
                                showMenu();
                            });
                        });
                    });
                });
            });
            break;
        case 2:
            rl.question("Enter the ID of the book you want to update: ", (id) => {
                rl.question("Enter new title (or leave empty to skip): ", (title) => {
                    rl.question("Enter new author (or leave empty to skip): ", (author) => {
                        rl.question("Enter new genre (0: Fiction, 1: NonFiction, 2: Mystery, 3: SciFi, 4: Biography) (or leave empty to skip): ", (genre) => {
                            rl.question("Enter new published year (or leave empty to skip): ", (year) => {
                                rl.question("Is the book available? (true/false or leave empty to skip): ", (available) => {
                                    const updatedDetails: any = {};
                                    if (title) updatedDetails.title = title;
                                    if (author) updatedDetails.author = author;
                                    if (genre) updatedDetails.genre = parseInt(genre);
                                    if (year) updatedDetails.publishedYear = parseInt(year);
                                    if (available) updatedDetails.isAvailable = available === "true";
                                    library.updateBook(parseInt(id), updatedDetails);
                                    showMenu();
                                });
                            });
                        });
                    });
                });
            });
            break;
        case 3:
            rl.question("Enter the ID of the book you want to delete: ", (id) => {
                library.deleteBook(parseInt(id));
                showMenu();
            });
            break;
        case 4:
            rl.question("Search by title (or leave empty): ", (title) => {
                rl.question("Search by author (or leave empty): ", (author) => {
                    rl.question("Search by genre (0: Fiction, 1: NonFiction, 2: Mystery, 3: SciFi, 4: Biography) (or leave empty): ", (genre) => {
                        const searchCriteria: any = {};
                        if (title) searchCriteria.title = title;
                        if (author) searchCriteria.author = author;
                        if (genre) searchCriteria.genre = parseInt(genre);
                        library.searchBooks(searchCriteria);
                        showMenu();
                    });
                });
            });
            break;
        case 5:
            library.displayBooks();
            showMenu();
            break;
        case 6:
            rl.close();
            break;
        default:
            console.log("Invalid option. Please try again.");
            showMenu();
            break;
    }
}

// Start the application
showMenu();
