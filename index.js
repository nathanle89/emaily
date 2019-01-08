const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({message: 'Hello World'});
});

// Heroku will override this value when deploying
const PORT = process.env.PORT || 5000;

app.listen(PORT);