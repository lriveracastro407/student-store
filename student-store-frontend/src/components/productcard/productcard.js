import "./productcard.css"

export default function Productcard ({ product }) {
    return (
        <div className="productcard">
            <div className="productimg">
                <img src={product.image} alt= { product.name }/>
            </div>
            <div className="productinfo">
                <div className="info">
                    <p className="productname"> { product.name } </p>
                        <p className="productdesc"> { product.description } </p>
                    <p className="productprice"> { product.price } </p>
                </div>

            </div>

        </div>
    )
}