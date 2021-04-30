const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.products);
router.post("/", productController.productsPost);

module.exports = router;
