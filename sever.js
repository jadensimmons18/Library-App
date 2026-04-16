








const express = require("express"); // loads express and stores it in var named express

const app = express(); 
const PORT = 3000;

// allows reading form input
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(__dirname));