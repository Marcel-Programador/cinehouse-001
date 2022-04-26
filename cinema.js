var catalogo = require("./database/catalogo.json");
console.log(catalogo);
console.log(catalogo.data);

var catalogoString = JSON.stringify(catalogo);
console.log(catalogoString);

var catalogoObj = JSON.parse(catalogoString);
console.log(catalogoObj);