import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import "./productcard.css"

export default function Productcard() {
    const {productId} = useParams()
    const [product, setProduct] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchId = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(`http://localhost:3001/store/${productId}`)
                const product = res?.data?.product
                console.log(product + 'productcard products')
                if (product) {
                    setProduct(product)
                }
            }catch (err) {
                setError(err)
            }
        }
        fetchId()
    },[productId])

    const renderProductCard = () => {
        if (isLoading) return <h1></h1>
        if (error) return <p className="description">No product found</p>
    }
   
    return (
        <div className = "ProductDetails">
            <div className = "product-card">
                <div className = "product-img">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="content">
                <div className="product-name">Name: {product.name}</div>
                <div className="product-price">Price: ${product.price}</div>
                <div className="product-desc">Description: {product.description}</div>
                </div>
                {renderProductCard()}
            </div>
        </div>
    )
}