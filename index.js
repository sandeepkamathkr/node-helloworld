const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

app.get('/', async (request,response) => {
    response.send(await readFile('./home.html','utf8'));
});


app.listen(process.env.PORT || 3004, () =>
 console.log(` App available on http://localhost:3004`)
)
