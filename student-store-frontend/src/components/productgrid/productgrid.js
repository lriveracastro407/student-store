import Productcard from "../productcard/productcard";
import "./productgrid.css"

export default function Productgrid ({ productlist = [] }) {
    return (
        <div id = "Purchase" className="productgrid">
            <div className="content"> 
                <h3>Our Product Line</h3>
                <div className="grid">
                    {productlist.map((product) => (
                     <Productcard  
                        key = { product.id }
                        product = {product}
                     />
                    ))}
                </div>
            </div>
        </div>
    )

}