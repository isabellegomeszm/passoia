import "./header.scss"
import logo from "../../../assets/logo-passoia.png"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { useBag } from "../../../context/BagContext";
import { useState } from "react";

function Header() {

    const navigate = useNavigate();
    const { totalItems } = useBag();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <img src={logo} onClick={() => navigate("/")} alt="Passoia logo" />
            
            <nav className="menu-nav">
                <ul className="menu=desktop">
                    <li onClick={() => navigate("/#looks")}>LOOKS</li>
                    <li onClick={() => navigate("/products")}>SHOP</li>
                    <li onClick={() => navigate("/blog")}>BLOG</li>
                </ul>

                <div className="menu-small" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`menu-mobile ${menuOpen ? "show" : ""}`}>
                        <li onClick={() => { navigate("/#looks"); setMenuOpen(false); }}>LOOKS</li>
                        <li onClick={() => { navigate("/products"); setMenuOpen(false); }}>SHOP</li>
                        <li onClick={() => { navigate("/blog"); setMenuOpen(false); }}>BLOG</li>
                    </ul>
            

                <div className="bag" onClick={() => navigate("/bag")}>
                    <HiOutlineShoppingBag className="bag-icon-header" />

                    <span className="bag-count">{totalItems}</span>
                </div>
            </nav>

        </header>
    )
}

export default Header;