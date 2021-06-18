import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="content">
                
                <div className="logo">
                    <Link to="/">
                        <img src="{logo}" alt="codepath logo" />
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