const express = require('express');
const app = express();
const cors = require('cors'); // cross origin resource sharing for browser to enable spotify api access
require("dotenv").config(); // read the .env file which stores clientID, clientSecret, port, and redirectURI 

// middleware
app.use(express.json()); // parse incoming json data from POST or PUT requests and make it available in req.body
app.use(cors()); // enable cross-origin requests to interact with spotify API
app.use(express.urlencoded({extended:true})); // parse incoming url-encoded form data, including arrays/nested objects
const AuthRoutes = require("./routes/authRoutes.js"); // file i made for route authorization
app.use("/", AuthRoutes); // any HTTP requests originating from root or subpaths will be passed through AuthRoutes for processing

/*
// route the HTTP GET requests to root '/api'
app.get("/api", (req, res) => {
   // res.send("Get request called");
    res.json({ "users": ["userOne", "userTwo", "userThree"] });
});
*/
app.get("/", (req, res) => {
res.send("Welcome");
});

// for the function above, we first need to listen on the port for the HTTP get request
const PORT = process.env.PORT || 5000; // look for environment variable (hosts default port) and if not found then assign port 5000
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); // start the server on the associated port