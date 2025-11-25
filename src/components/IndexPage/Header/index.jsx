import "./header.scss"
import logo from "../../../assets/logo-passoia.png"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useState } from "react"

function Header() {
    const [cartCount, setCartCount] = useState(0)

    return (
        <header>
            <img src={logo} alt="logo marca da página" />
            
            <div className="menu-nav">
                <ul>
                    <li>LOOKS</li>
                    <li>PRODUTOS</li>
                    <li>BLOG</li>
                </ul>

            
                <div class="cart">
                    <HiOutlineShoppingBag className="cart-icon" />
                    <span class="cart-count">{cartCount}</span>
                </div>
            </div>

        </header>
    )
}

export default Header;