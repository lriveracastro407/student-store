const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")
const { NotFoundError } = require("../utils/errors")

class Store {
    //grabs a list of products from the database
    static async listProducts() {
        const productList = storage.get("products").value()
        return productList
    }
    //for each of the products we are getting the IDs from the database
    static async getIDproduct(productId) {
        const product = storage.get("products").find( { id : Number(productId)} ).value()
        
        if (product) {  
            return product
        } else {
            throw new NotFoundError("A product with that ID does not exist.")
        }
        
    }

}

module.exports = Store