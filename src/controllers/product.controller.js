import Product from "../models/product.model";


const products = [
    { id: 1, name: "Áo polo", price: 100 },
    { id: 2, name: "Quần Jean", price: 300 },
    { id: 3, name: "Áo Khoác", price: 500 },
    { id: 4, name: "Giày thể thao", price: 350 },
    { id: 5, name: "Balo ", price: 250 }
];

export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                message: "Product Not found",
            });
        }
        return res.json(product);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
// ADD: Thêm sản phẩm mới
export const createOne = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        return res.status(201).json(product);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
export const updateOne = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
//Delete
export const deleteOne = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        return res.json({
            success: true,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
};
