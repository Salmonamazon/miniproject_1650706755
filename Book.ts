enum Genre {
    Fiction,
    NonFiction,
    Mystery,
    SciFi,
    Biography,
}

interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    publishedYear: number;
    isAvailable: boolean;
}

export { Genre, Book };
