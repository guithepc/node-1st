import express from "express";

const app = express();

const livros = [
    { id: 1, "title": "Superman" },
    { id: 2, "title": "Batman" },
]

app.get('/', (req, res) => {
    res.status(200).send('Default route')
})

app.get('/books', (req, res) => {
    res.status(200).json(livros)
})

export default app