export default class BookstoreApi {
  constructor() {
    this.baseURL =
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
    this.appId = 'SlfJfFjYZXGtmphahG2T';
  }

  static async getBooks() {
    const booksEndpoint = `${this.baseURL}/${this.appId}/books`;

    const response = await fetch(booksEndpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status !== 200) {
      throw new Error(
        'Can not fetch the books with the provided Endpoint',
      );
    }
    const data = await response.json;
    return data;
  }

  static async addBook(itemId, title, author, category) {
    const booksEndpoint = `${this.baseURL}/${this.appId}/books`;
    const data = {
      item_id: itemId,
      title,
      author,
      category,
    };

    const response = await fetch(booksEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status !== 200) {
      throw new Error(
        `Can not add the book with the id: ${itemId}`,
      );
    }
  }

  static async deleteBook(itemId) {
    const bookDeleteEndpoint = `${this.baseURL}/${this.appId}/books/${itemId}`;

    const response = await fetch(bookDeleteEndpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 'false',
    });

    if (response.status !== 200) {
      throw new Error(
        `Can not delete the book with the id: ${itemId}`,
      );
    }
  }
}
