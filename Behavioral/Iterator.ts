class Book {
  constructor(
    public title: string,
    public author: string,
    public genre: string
  ) {}
}

class Library {
  private books: Book[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  getCollection(): Iterator<Book> {
    return new BookIterator(this.books);
  }
}

interface Iterator<T> {
  hasNext(): boolean;
  next(): IteratorResult<Book>;
}

class BookIterator implements Iterator<Book> {
  private currentIndex: number = 0;

  constructor(private books: Book[]) {}

  hasNext(): boolean {
    return this.currentIndex < this.books.length;
  }

  next(): IteratorResult<Book> {
    if (this.hasNext()) {
      const book = this.books[this.currentIndex];
      this.currentIndex++;
      return { value: book, done: false };
    }
    return { value: undefined as any, done: true };
  }
}

const library = new Library();
library.addBook(new Book("Пригоди Гаррі Поттера", "Джоан Роулінг", "Фентезі"));
library.addBook(new Book("1984", "Джордж Орвелл", "Наукова фантастика"));
library.addBook(new Book("Пісня льоду й полум'я", "Джордж Мартін", "Фентезі"));

const iterator = library.getCollection();

while (iterator.hasNext()) {
  const book = iterator.next().value;
  if (book) {
    console.log(
      `Назва: ${book.title}, Автор: ${book.author}, Жанр: ${book.genre}`
    );
  }
}
