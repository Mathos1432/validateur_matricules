# Validateur de matricules
Validateur de matricules pour le CEGL/CEGINFO

Pour que le projet soit fonctionnel, un fichier connection.js doit exister avec le fichier db.js qui contient un object options avec les options de connexion.

Par exemple: 

```javascript
var options = {
  user:"user",
  pass:"password"
}
```

Il faut aussi exécuter la commande npm install dans le dossier du projet pour ensuite exécuter npm start. La page devrait être à localhost:3000.
