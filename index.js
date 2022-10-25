const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('this is right')
})

app.listen(port, () => {
    console.log(`this is port ${port}`);
})