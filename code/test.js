const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// Connectez-vous à MongoDB (assurez-vous que MongoDB est en cours d'exécution)
mongoose.connect('mongodb://localhost:27017/votrebasededonnees', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Créez un modèle mongoose
const Item = mongoose.model('Item', { name: String });

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Route pour obtenir tous les éléments
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Route pour ajouter un élément
app.post('/items', async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json(newItem);
});

// Écoutez le port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
