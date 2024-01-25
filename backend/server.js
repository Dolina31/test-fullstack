const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// connexion à la DB
connectDB();

const app = express();

//middleware qui permet de traiter les donneés de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/articles", require("./routes/articles.routes"));

//lancer le server
app.listen(port, () => console.log("Le server a démarré au port " + port));
