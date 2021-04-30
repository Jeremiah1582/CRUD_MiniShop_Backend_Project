const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  price: Number,
  discount: Number,
  quantity: Number,
});

// Schema declaration
const Product = mongoose.model("Product", productSchema);

//Export
module.exports = Product;
