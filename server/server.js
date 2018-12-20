const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json('Hello world');
    res.end;
});

app.listen(3000, () => console.log('Escuchando puerto 3000'));