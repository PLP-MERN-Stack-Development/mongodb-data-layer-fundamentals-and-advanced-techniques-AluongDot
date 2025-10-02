// insert_books.js (Node.js version)

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'plp_bookstore';
const collectionName = 'books';

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_year: 1925,
    price: 15.99,
    in_stock: true,
    pages: 180,
    publisher: "Scribner"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 18.99,
    in_stock: true,
    pages: 324,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 14.99,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    published_year: 1813,
    price: 12.99,
    in_stock: true,
    pages: 432,
    publisher: "T. Egerton"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    published_year: 1951,
    price: 16.99,
    in_stock: true,
    pages: 277,
    publisher: "Little, Brown and Company"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published_year: 1997,
    price: 22.99,
    in_stock: true,
    pages: 309,
    publisher: "Scholastic"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 19.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    published_year: 2011,
    price: 24.99,
    in_stock: true,
    pages: 443,
    publisher: "Harper"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Biography",
    published_year: 2018,
    price: 21.99,
    in_stock: false,
    pages: 334,
    publisher: "Random House"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    published_year: 2011,
    price: 26.99,
    in_stock: true,
    pages: 336,
    publisher: "Crown Business"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 28.99,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 20.99,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  }
];

async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    await collection.deleteMany({});
    console.log('🗑️ Old data cleared');

    const result = await collection.insertMany(books);
    console.log(`📚 ${result.insertedCount} books inserted successfully!`);
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await client.close();
    console.log('🔌 Connection closed');
  }
}

insertBooks();
