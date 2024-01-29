const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = 3001;

// connexion à la DB
connectDB();

const app = express();

// middleware qui permet de traiter les données de la Request
app.use(
  cors({
    origin: "http://localhost:3000", // autorise les requêtes depuis ce domaine
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // autorise ces méthodes HTTP
    credentials: true, // autorise les cookies et les en-têtes d'authentification
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/articles", require("./routes/articles.routes"));

// lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
