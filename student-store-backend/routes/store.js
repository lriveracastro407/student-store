const express = require("express")
const Store = require("../models/store")
const router = express.Router()

//list of products

router.get("/", async(req, res, next) => {
    try {
        const productList = await Store.listProducts()
        res.status(200).json( { productList })
    } catch (err) {
        next(err)
    }
})

//individual product id

router.get("/:productId", async(req, res, next) => {
    try {
        const productId = req.params.productId
        const product = await Store.getIDproduct(productId)
        res.status(200).json( { product } )
    } catch (err) {
        next(err)
    }
})

module.exports = router