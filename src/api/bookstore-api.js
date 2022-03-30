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

    fetch(booksEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  static async deleteBook(itemId) {
    const bookDeleteEndpoint = `${this.baseURL}/${this.appId}/books/${itemId}`;

    fetch(bookDeleteEndpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 'false',
    });
  }
}
