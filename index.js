const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
app.use(cors())

const categories = require(`./data/categories.json`);
const courses = require(`./data/courses.json`);

app.get('/', (req, res) => {
    res.send('this is right')
})

app.get('/category', (req, res) => {
    res.send(categories)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const selectedId = courses.find(c => c._id === id);
    res.send(selectedId)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectCourse = courses.find(c => c._id === id)
    res.send(selectCourse)
})

app.listen(port, () => {
    console.log(`this is port ${port}`);
})