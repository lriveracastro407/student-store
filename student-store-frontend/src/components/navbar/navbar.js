import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="content">
                
                <div className="logo">
                    <Link to="/">
                        <img src="https://static.thenounproject.com/png/1839211-200.png" alt="cereal logo" width="100px"/>
                    </Link>
                 </div>

                 <ul className="links">
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li>
                        <Link to="/#About">About Us</Link>
                     </li>
                     <li>
                        <Link to="/#Purchase">Purchase</Link>
                     </li>
                 </ul>
            </div>
        </nav>
    )
}