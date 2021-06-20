//import Productcard from "../productcard/productcard";
import "./productgrid.css"
import { Link } from "react-router-dom";

export default function Productgrid ({ products }) {
    return (
        <div id = "Purchase" className="productgrid">
            <div className="content"> 
                <h3>Our Product Line</h3>
                <div className="grid">
                    {products.map((product) => (
                     <Link to= {`/store/${product.id}`} key ={product.id}>
                        {console.log(product.id)}
                        <div className="product-info" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name}/>
                            </div>
                            {/* <div className="product-category">{product.category}</div> */}
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">${product.price}</div>
                        </div>
                     </Link>

                     
                    ))}
                </div>
            </div>
        </div>
    )

}