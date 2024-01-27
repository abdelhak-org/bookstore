const { Router } = require("express");
const Book = require("../models/Book");
const router = Router();

///  get all  books
router.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.log("is accured an error ", error.message);
    res.status(500).json("req ,. is failed", error.message);
  }
});

// fetch single item using id

router.get("/api/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);

    if (!book) {
      res.status(400).json("no book found ");
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// post a single item

router.post("/api/books", async (req, res) => {
  const newBook = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    published: req.body.published,
    description: req.body.description,
  };
  try {
    const book = new Book(newBook);
    const result = await book.save();
    res.status(200).json({ message: "one book is added", book: result });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

///  update a single item

router.put("/api/books/:id", async (req, res) => {
  const itemId = req.params.id;

  const updatedItem = {
    id: itemId,
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    published: req.body.published,
    description: req.body.description,
  };
  try {
    const book = await Book.findOne({ _id: itemId });
    if (!book) {
      res.status(400).json("book not found");
    }
    const result = await Book.updateOne({ _id: itemId }, { $set: updatedItem });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// delete   item using id

router.delete("/api/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.deleteOne({ _id: id });

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
