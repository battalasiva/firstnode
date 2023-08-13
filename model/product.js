const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String ,required:true},
  description: { type: String },
  price: { type: Number,min:[0,"wrong price"] },
  discountPercentage: { type: Number,min:[0,"wrong min discount"] ,max:[50,"wrong max discount"]},
  rating: { type: Number,min:[0,"wrong min rating"],max:[5,"wrong max rating"] },
  stock:{type:Number},
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
  images: [{ type: String }],
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product 
