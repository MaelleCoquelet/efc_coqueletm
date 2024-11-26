/**
 * @name server.mjs
 * @description Exemple d'utilisation de mysql et ExpressJS comme backend
 * @author author
 * @version version
 **/

import express from "express";
import cors from "cors";

const port = 3306;
const hostname = "127.0.0.1"; // Equivalent de localhost

// Création du serveur
const server = express();

// Utilisation de cors
server.use(cors());

// Définir que le client va envoyer des infos au format json
server.use(express.json({ limit: "50mb" }));

// Utilisation des routes définies
import recipes from "./routes/recipes.mjs";
// recipes/all
server.use("/recipes", recipes)

// Définition d'un 404
server.all("*", (req, res) => {
    res.status(404).end("Ressources not found");
});

// Lancement du serveur
server.listen(port, hostname, () => {
    console.log(`Serveur lancé http://${hostname}:${port}`);
});