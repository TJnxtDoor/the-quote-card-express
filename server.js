"use strict";

const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Serve static files from the public directory
app.use(express.static("./public"));

// Start the server
app.listen(port, () => {
	console.log(`Server is running http://localhost:${port}`);
	console.log("Press Ctrl+C to end this process.");
});