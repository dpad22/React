const mongoose = require("mongoose");


const SaleSchema = new mongoose.Schema(
    {
        sale:[{type:Number,required:[true,"Sale cannot be less than 1"]}],
        date_Sold: [{type:Date,required:[true, "Date cannot be empty"]}]
    }
)

const ProductSchema = new mongoose.Schema(
{
    title: {type: String, required: [true, "Product must have a title"]},
    category: {type: String, required: [true, "Product must have a category"]},
    price: {type: Number, required: [true, "Price is required"], min: [1, "Price must be at least $1"]},
    description: {type: String, required: [true, "Please describe product."]},
    Sales: [SaleSchema],
},
    {timestamps: true}
);

module.exports = {
    Product: mongoose.model("Product", ProductSchema),
    Sale: mongoose.model("Sale", SaleSchema)
};