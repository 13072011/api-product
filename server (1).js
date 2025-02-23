const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour analyser le corps des requêtes en JSON
app.use(bodyParser.json());

// Route pour recevoir les notifications de commandes
app.post('/notification', (req, res) => {
    const { product, price, message } = req.body;

    // Logique pour traiter la notification de commande
    console.log(`Produit: ${product}`);
    console.log(`Prix: ${price}`);
    console.log(`Message: ${message}`);

    // Répondre avec un statut de succès
    res.status(200).json({ message: 'Notification reçue avec succès' });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});