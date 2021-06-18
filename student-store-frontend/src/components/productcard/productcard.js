import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

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
        if (isLoading) return <h1>Product Details</h1>
        if (error) return <p className="description">No product found</p>
    }
    // const formatter = new Intl.NumberFormat("en-US", {
    //     currency: "USD",
    //     minimumFractionDigits: 2,
    //     maximumFractionDigits: 2,
    //   })
      
    // const priceFormat = (amount) => {
    //     return `$${formatter.format(amount)}`
    //   }

    return (
        <div className = "ProductDetails">
            <div className = "product-card">
                <div className = "product-img">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="product-category">{product.category}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-desc">{product.description}</div>
                {renderProductCard()}
            </div>
        </div>
    )
}