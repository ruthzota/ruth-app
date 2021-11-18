require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.static("client"));

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/main.js'))
  });

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))

const port = process.env.PORT || process.env.SERVER_PORT;

app.listen(port, () => console.log(`Yo server running on port ${port}`)); 
