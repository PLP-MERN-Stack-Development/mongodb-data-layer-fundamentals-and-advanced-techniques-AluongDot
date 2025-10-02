// queries.js
// Run with: node queries.js

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "plp_bookstore";
const collectionName = "books";

async function runQueries() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const books = db.collection(collectionName);

    // Task 2: Basic CRUD
 
    console.log("\n Task 2: Basic CRUD");

    console.log("1. Find all Fiction books:");
    console.log(await books.find({ genre: "Fiction" }).toArray());

    console.log("2. Find books published after 2015:");
    console.log(await books.find({ published_year: { $gt: 2015 } }).toArray());

    console.log("3. Find books by George Orwell:");
    console.log(await books.find({ author: "George Orwell" }).toArray());

    console.log("4. Update price of '1984':");
    await books.updateOne({ title: "1984" }, { $set: { price: 25 } });

    console.log("5. Delete 'The Great Gatsby':");
    await books.deleteOne({ title: "The Great Gatsby" });

 
    // Task 3: Advanced Queries
   
    console.log("\n Task 3: Advanced Queries");

    console.log("1. In stock and published after 2010:");
    console.log(await books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray());

    console.log("2. Projection (title, author, price):");
    console.log(await books.find({}, { projection: { title: 1, author: 1, price: 1 } }).toArray());

    console.log("3. Sort by price ASC:");
    console.log(await books.find().sort({ price: 1 }).toArray());

    console.log("4. Sort by price DESC:");
    console.log(await books.find().sort({ price: -1 }).toArray());

    console.log("5. Pagination (5 books per page) - Page 1:");
    console.log(await books.find().limit(5).toArray());

    console.log("   Page 2:");
    console.log(await books.find().skip(5).limit(5).toArray());

    
    // Task 4: Aggregation
    
    console.log("\n Task 4: Aggregation Pipelines");

    console.log("1. Average price by genre:");
    console.log(await books.aggregate([
      { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
    ]).toArray());

    console.log("2. Author with most books:");
    console.log(await books.aggregate([
      { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
      { $sort: { totalBooks: -1 } },
      { $limit: 1 }
    ]).toArray());

    console.log("3. Group by publication decade:");
    console.log(await books.aggregate([
      {
        $group: {
          _id: { $floor: { $divide: ["$published_year", 10] } },
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          decade: { $multiply: ["$_id", 10] },
          count: 1,
          _id: 0
        }
      },
      { $sort: { decade: 1 } }
    ]).toArray());

    
    // Task 5: Indexing

    console.log("\n Task 5: Indexing");

    console.log("1. Index on title:");
    console.log(await books.createIndex({ title: 1 }));

    console.log("2. Compound index on author + published_year:");
    console.log(await books.createIndex({ author: 1, published_year: -1 }));

    console.log("3. Explain query performance:");
    console.log(await books.find({ title: "1984" }).explain("executionStats"));

  } catch (err) {
    console.error(" Error:", err);
  } finally {
    await client.close();
    console.log("🔒 Connection closed");
  }
}

runQueries();
