const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path');
app.use(express.static(path.join(__dirname, './Pokemon/dist/Pokemon')));

//Setting our server to listen on port: 8000
app.listen(8000, function(){
    console.log("listening on port 8000");
})