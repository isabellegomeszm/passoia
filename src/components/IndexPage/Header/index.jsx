import "./header.scss"
import logo from "../../../assets/logo-passoia.png"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { useBag } from "../../../context/BagContext";


function Header() {

    const navigate = useNavigate();
    const { totalItems } = useBag();

    return (
        <header>
            <img src={logo} alt="Passoia logo" />
            
            <div className="menu-nav">
                <ul>
                    <li onClick={() => navigate("/#looks")}>LOOKS</li>
                    <li onClick={() => navigate("/products")}>PRODUCTS</li>
                    <li onClick={() => navigate("/blog")}>BLOG</li>
                </ul>

            
                <div className="bag" onClick={() => navigate("/bag")}>
                    <HiOutlineShoppingBag className="bag-icon" />

                    {totalItems > 0 && (
                        <span className="bag-count">{totalItems}</span>
                    )}
                </div>
            </div>

        </header>
    )
}

export default Header;