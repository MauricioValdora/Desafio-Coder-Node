import express from 'express'
import ProductManager from './ProductManager.js'
import fs from 'fs';
import { pid } from 'process';

const app = express()
app.use(express.urlencoded({ extended: true }))

const productManager = new ProductManager();
productManager.addProducts(
    "producto prueba 1",
    "este es un producto de prueba 1",
    200,
    "sin imagen",
    "abc123",
    25
);

productManager.addProducts(
    "producto prueba 2",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc1234",
    10
);
productManager.addProducts(
    "producto prueba 3",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc1231234",
    10
);
productManager.addProducts(
    "producto prueba 4",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc1231asdf234",
    10
);
productManager.addProducts(
    "producto prueba 5",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc123asdf1234",
    10
);
productManager.addProducts(
    "producto prueba 6",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc12asdfasdf31234",
    10
);
productManager.addProducts(
    "producto prueba 7",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc123dfghdf1234",
    10
);
productManager.addProducts(
    "producto prueba 8",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc123dfgh1234",
    10
);
productManager.addProducts(
    "producto prueba 9",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc12erty31234",
    10
);
productManager.addProducts(
    "producto prueba 10",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc12vcxb31234",
    10
);
productManager.addProducts(
    "producto prueba 11",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc123asdq1234",
    10
);


app.get('/products', (req, res) => {

    const { limit } = req.query
    const products = JSON.parse(productManager.getProducts())
    let datos;
    if (limit <= products.length) {
        datos = products.slice(0, limit)
    } else {
        datos = products;
    }
    res.json({ data: datos })
})

app.get('/products/:pid', (req, res) => {
    const pId = parseInt(req.params.pid);
  
    try {
      const productById = productManager.getProductsById(pId);
  
      if (productById) {
        res.send(productById);
      } else {
        res.status(404).send(`El id ${pId} no existe en la base de datos`);
      }
    } catch (error) {
      res.status(500).send('Ocurrió un error al buscar el producto');
    }
  });
  
app.listen(8080, () => {
    console.log("server on")
})




