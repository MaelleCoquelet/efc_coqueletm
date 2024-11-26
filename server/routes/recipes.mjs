/**
 * @name routes/recipes.mjs
 * @description Toutes les routes pour atteindre ou modifier les données des reportages
 * @author author
 * @version version
 **/

import express from "express";
import { getConnectionPool } from "../mysql.mjs";

// Création de routeur express
const router = express.Router();

// Tables de travail
const table = "recipes";

// Création de la connexion au serveur SQL
const conn = getConnectionPool();

// GET
// Récupérer toutes les recettes
router.get("/all", async (req, res) => {
    try {
        const [results] = await conn.query(`SELECT * FROM ${table}`);
        // Retourner la réponse au client
        res.status(200).json({ success: true, message: "Recettes récupérées avec succès", data: results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error, data: null });
    }
});



// POST
// Ajouter une nouvelle recette

router.post("/add", async (req, res) => {
    // Récupération des données par le client
    const universe = req.body.universe || "Univers par défaut";
    const name_recipe = req.body.name_recipe || "Nom de recette par défaut";
    const image_recipe = req.body.image_recipe || "Image par défaut";
    const ingredients = req.body.ingredients || "Ingrédients par défaut";
    const step_one = req.body.step_one || "Étape une par défaut";
    const step_two = req.body.step_two || "Étape deux par défaut";
    const step_three = req.body.step_three || "Étape trois par défaut";
    const step_four = req.body.step_four || "Étape quatre par défaut";
    const step_five = req.body.step_five || "";
    const step_six = req.body.step_six || "";
    const step_seven = req.body.step_seven || "";
    const step_eight = req.body.step_eight || "";

    try {
        const [results] = await conn.query(`INSERT INTO ${table} SET universe = ?, name_recipe = ?, image_recipe = ?, ingredients = ?, step_one = ?, step_two = ?, step_three = ?, step_four = ?, step_five = ?, step_six = ?, step_seven = ?, step_eight = ?`, [universe, name_recipe, image_recipe, ingredients, step_one, step_two, step_three, step_four, step_five, step_six, step_seven, step_eight]);
        // Retourner la réponse au client
        res.status(200).json({ success: true, message: "Recette envoyée avec succès", data: results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error, data: null });
    }
});


// PUT
// Modifier une recette en passant son ID

router.put("/edit/:id", async (req, res) => {
    // Valider si l'id existe et est valide
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0) {
        return res.status(500).json({ success: false, message: "L'id reçue n'est pas valide", data: null });
    };

    // Récupération des données par le client
    const universe = req.body.universe || "Univers modifié par défaut";
    const name_recipe = req.body.name_recipe || "Nom de recette modifié par défaut";
    const image_recipe = req.body.image_recipe || "Image modifié par défaut";
    const ingredients = req.body.ingredients || "Ingrédients modifié par défaut";
    const step_one = req.body.step_one || "Étape une modifié par défaut";
    const step_two = req.body.step_two || "Étape deux modifié par défaut";
    const step_three = req.body.step_three || "Étape trois modifié par défaut";
    const step_four = req.body.step_four || "Étape quatre modifié par défaut";
    const step_five = req.body.step_five || "";
    const step_six = req.body.step_six || "";
    const step_seven = req.body.step_seven || "";
    const step_eight = req.body.step_eight || "";

    try {
        const [results] = await conn.query(`UPDATE ${table} SET universe = ?, name_recipe = ?, image_recipe = ?, ingredients = ?, step_one = ?, step_two = ?, step_three = ?, step_four = ?, step_five = ?, step_six = ?, step_seven = ?, step_eight = ? WHERE id_recipe = ?`, [universe, name_recipe, image_recipe, ingredients, step_one, step_two, step_three, step_four, step_five, step_six, step_seven, step_eight, id]);
        res.status(200).json({ success: true, message: "Recette modifiée !", data: results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error, data: null });
    }
});

// DELETE
// Supprimer une recette en fonction de son ID
router.delete("/delete/:id", async (req, res) => {
    // Valider si l'id existe et est valide
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0) {
        return res.status(500).json({ success: false, message: "L'id reçue n'est pas valide", data: null });
    };
    try {
        const [results] = await conn.query(`DELETE FROM ${table} WHERE id_recipe = ?`, [id]);
        if (results.affectedRows == 0) {
            return res.status(404).json({ success: false, message: "Recette non trouvée", data: null });
        };
        // Retourner la réponse au client
        res.status(200).json({ success: true, message: "Recette effacée avec succès", data: results });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error, data: null });
    }
});


// Exposer le routeur pour d'autres scripts
export default router;
