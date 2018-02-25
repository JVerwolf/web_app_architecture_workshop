let express = require('express');
let bodyParser = require('body-parser');

let app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Referece: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// This defines a resource at "/" for "GET"on our API.
app.get('/', (req, res) => {
    res.sendFile(__dirname +  '/index.html');
});

// Tells the Express framework what port to use.
app.listen(PORT, () => {
    console.log("Listening on " + PORT);
});