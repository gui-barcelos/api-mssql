
const morgan = require('morgan');
const bodyParser = require('body-parser');
let express = require('express');
let router = require('./app/router');

const port = 3000;
let app = express();
                      
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.get("/", (req, res) => res.json({message: "Welcome to our Exercise API!"}));
router(app);

app.listen(port);

console.log("Listening on port " + port);

module.exports = app;
