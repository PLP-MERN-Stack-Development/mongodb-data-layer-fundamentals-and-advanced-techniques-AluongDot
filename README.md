# MongoDB Data Layer Fundamentals and Advanced Techniques

[![MongoDB](https://img.shields.io/badge/MongoDB-v6.x-green)](https://www.mongodb.com/)
[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-brightgreen)](https://nodejs.org/)

## 📚 Project Overview

This project demonstrates the fundamentals and advanced techniques of working with MongoDB, including:
- Database and collection setup
- CRUD operations
- Advanced queries (filtering, projection, sorting, pagination)
- Aggregation pipelines
- Indexing for performance

You will use both Node.js scripts and the MongoDB Shell to interact with your database.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-AluongDot.git
cd mongodb-data-layer-fundamentals-and-advanced-techniques-AluongDot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB

- Install MongoDB locally or use [MongoDB Atlas](https://www.mongodb.com/atlas/database).
- Ensure your MongoDB server is running.

### 4. Insert Sample Data

Run the script to populate your database:

```bash
node insertbooks.js
```

### 5. Run Queries

Execute all assignment queries:

```bash
node queries.js
```

## 📝 Assignment Tasks

See [examples/Week1-Assignment.md](examples/Week1-Assignment.md) for detailed instructions.

- Insert at least 10 book documents
- Perform CRUD and advanced queries
- Use aggregation pipelines
- Implement and analyze indexes

## 📂 Project Structure

```
.
├── .env
├── db.js
├── insertbooks.js
├── queries.js
├── README.md
├── examples/
│   ├── insert_books.js
│   ├── mongodb_connection_example.js
│   ├── mongodb_shell_example.js
│   ├── README.md
│   ├── SETUP_INSTRUCTIONS.md
│   └── Week1-Assignment.md
```

## 🖼️ Screenshots

### MongoDB Compass - Books Collection

![MongoDB Compass Books Collection](images/compass-books-collection.png)

### MongoDB Compass - Aggregation Pipeline

![MongoDB Compass Aggregation Pipeline](images/compass-aggregation.png)












<h2>📸 Screenshots</h2>

<h3>Books inserted into <code>plp_bookstore.books</code></h3>
<img src="./Screenshot%202025-10-02%20164818.png" alt="Books Screenshot" width="700">

















<h3>Aggregation Pipeline Results</h3>
<img src="./Screenshot%202025-10-02%20163526.png" alt="Aggregation Screenshot" width="700">




















## 📖 Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)
- [MongoDB University](https://university.mongodb.com/)

## 🧑‍💻 Author

> For any issues, please open an [issue](https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-AluongDot/issues) on GitHub.
