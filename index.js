const express = require("express");
const app = express();
const port = 3000;

// Abilito assets statici
app.use(express.static("public"));

// Pagina: Home
app.get("/", (req, res) => {
    res.type("html").send("Server del mio blog");
});

// Pagina: Bacheca
app.get("/bacheca", (req, res) => {
    res.type("json").send({
        totalePost: posts.length,
        listaPost: posts,
    });
});

app.listen(port, () => {
    console.log(`App Express listening on port ${port}`);
});

// Dichiarazione dei post
let posts = [
    // Post 1
    {
        titolo: "Ciambellone",
        contenuto: "",
        immagine: "./images/ciambellone.jpeg",
        tag: ["ciambella", "zucchero a velo", "dolce"],
    },
    // Post 2
    {
        titolo: "Cracker di barbabietola",
        contenuto: "",
        immagine: "./images/cracker_barbabietola.jpeg",
        tag: ["cracker", "barbabietola"],
    },
    // Post 3
    {
        titolo: "Pane fritto dolce",
        contenuto: "",
        immagine: "./images/pane_fritto_dolce.jpeg",
        tag: ["pane", "fritto", "dolce"],
    },
    // Post 4
    {
        titolo: "Pasta di barbabietola",
        contenuto: "",
        immagine: "./images/pasta_barbabietola.jpeg",
        tag: ["pasta", "barbabietola"],
    },
    // Post 5
    {
        titolo: "Torta paesana",
        contenuto: "",
        immagine: "./images/torta_paesana.jpeg",
        tag: ["torta", "dolce"],
    },
];
console.log(posts);

// REMOVED: CREAZIONE DINAMICA DI POST
//
//   ||
//   ||
//  \  /
//   \/
//
// // Dichiarazione oggetto Post
// let post = {
//     titolo: "",
//     contenuto: "",
//     immagine: "",
//     tag: [],
// };

// // Array di post
// let posts = [];
// for (let i = 0; i < 5; i++) {
//     addObjectToArray(posts, post);
// }
// posts[0].immagine = "./images/ciambellone.jpeg";

// /**
//  * Funzione che aggiunge un oggetto a un array un oggetti.
//  *
//  * @param {Array} array array a cui aggiugere l'oggetto
//  * @param {Object} object oggetto da aggiungere
//  */
// function addObjectToArray(array, object) {
//     array.push({ ...object });
// }
