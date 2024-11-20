const express = require("express");
const router = express.Router();

// METODI CRUD
// Metodo: Index (Visualizzare tutti gli elementi)
router.get("/", (req, res) => {
    res.send(`Visualizzazione dei post`);
});
// Metodo: Show (Visualizzare un elemento)
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Visualizzazione del post ${id}`);
});
// Metodo: Store (Creare un nuovo elemento)
router.post("/", (req, res) => {
    res.send(`Creazione di un nuovo post`);
});
// Metodo: Update (Modificare interamente un elemento)
router.put("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Modifica integrale del post ${id}`);
});
// Metodo: Modify (Modificare parzialmente un elemento)
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Modifica parziale del post ${id}`);
});
// Metodo: Destroy (Eliminare un elemento)
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Eliminazione del post ${id}`);
});

//Esporto i metodi
module.exports = router;
