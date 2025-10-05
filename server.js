"use strict";

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 
app.use(express.static("./public"));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});