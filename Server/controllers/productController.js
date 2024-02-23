const product = require('../models/products')


const getAllProducts = async (req, res) => {
    try {
        const result = await product.find({});
        res.status(200).json({ message: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const createProduct = async (req, res) => {
    const { name, description, price } = req.body;
    
    try {
        const newproduct = new product({
            name,
            description,
            price
        });

        await newproduct.save();

        res.status(201).json({ message: 'Product created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};




module.exports = {
    getAllProducts,
    createProduct
}