const Product = require("../models/Product");

exports.createProduct = async (req, res) => {

try {

const product = await Product.create({

...req.body,
createdBy: req.user.id

});

res.json(product);

} catch (error) {

console.log(error);
res.status(500).json("Server Error");

}

};


exports.getProducts = async (req, res) => {

try {

const products = await Product.find();

res.json(products);

} catch (error) {

console.log(error);
res.status(500).json("Server Error");

}

};


exports.updateProduct = async (req, res) => {

try {

const product = await Product.findByIdAndUpdate(

req.params.id,
req.body,
{ new: true }

);

res.json(product);

} catch (error) {

console.log(error);
res.status(500).json("Server Error");

}

};


exports.deleteProduct = async (req, res) => {

try {

await Product.findByIdAndDelete(req.params.id);

res.json({ msg: "Product deleted" });

} catch (error) {

console.log(error);
res.status(500).json("Server Error");

}

};