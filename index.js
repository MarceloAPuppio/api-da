const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
let products = [
  {
    nombre: "Sal Fina Lavada Purifada y Seca Dos Anclas",
    shortName: "Sal Fina",
    presentacion: "25 kgs",
    categoria: "sal",
  },
  {
    nombre: "Sal Entrefina Lavada Purifada y Seca Dos Anclas",
    shortName: "Sal Entrefina",
    presentacion: "25 kgs",
    categoria: "sal",
  },
  {
    nombre: "Sal Gruesa Lavada Purifada y Seca Dos Anclas",
    shortName: "Sal Gruesa",
    presentacion: "25 kgs",
    categoria: "sal",
  },
  {
    nombre: "Azúcar Ledesma",
    shortName: "Azúcar Ledesma",
    presentacion: "25 kgs",
    categoria: "azucar",
  },
];

app.listen(PORT, () => {
  console.log("puerto 3001 amigue");
});
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});
app.get("/api/products/:categoria", (req, res) => {
  let categoria = req.params.categoria;
  let productsByCategory = products.filter(
    (index) => index.categoria === categoria
  );
  console.log(productsByCategory.length);
  productsByCategory.length > 0
    ? res.json(productsByCategory)
    : res.status(404).send({ message: "categoría inexistente" });
});
