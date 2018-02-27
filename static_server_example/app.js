let express = require('express');
let bodyParser = require('body-parser');

let app = express();
const PORT = 3000;

// BodyParser is Express middleware. It parses elements out
// of the request string and adds them to the req object.
// We don't need this for what we are doing, but this will
// allow you play around with POST requests.
app.use(bodyParser.json());

// Referece: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// This defines a resource at "/" for "GET" on our API.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log("We just got a GET request at '/' in our API!");
});

// Tells the Express framework what port to use.
app.listen(PORT, () => {
    console.log("Listening on " + PORT);
});