const { getProductsFromDataJSON } = require("../utils/index");

var express = require("express");
var router = express.Router();
const prisma = require('prisma/client');
const products = getProductsFromDataJSON();

/* GET production listing. */
router.get("/get-all", function (req, res, next) {
  res.send(products);
});
router.get("/get-product-by-id/:id", function (req, res, next) {
  const productId = req.params.id;
  console.log({ productId });
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );
  res.send(product);
});
router.post("/create", function (req, res, next) {
  const product = req.body;
});
// router.post("/update/id", function (req, res, next) {
//   res.send(products);
// });
// router.delete("/delete", function (req, res, next) {
//   res.send(products);
// });

module.exports = router;
