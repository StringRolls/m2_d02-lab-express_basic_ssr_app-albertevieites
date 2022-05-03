const express = require("express");

require("dotenv").config();

const app = express();

app.use(express.static("public"));

// Build the server here
// app.get("/homepage", (request, response) => response.sendFile(__dirname + "/views/index.html"));

//app.get("/hobbies", (request, response) => response.sendFile(__dirname + "/views/home.html"));

app.get("/", (request, response) =>
  response.sendFile(__dirname + "/views/index.html")
);

app.get("/about", (request, response) =>
  response.sendFile(__dirname + "/views/about.html")
);

app.get("/works", (request, response) =>
  response.sendFile(__dirname + "/views/works.html")
);

app.get("/photoGallery", (request, response) =>
  response.sendFile(__dirname + "/views/photoGallery.html")
);

const PORT = 3000;
app.listen(PORT, () => console.log("running on port 3000"));
