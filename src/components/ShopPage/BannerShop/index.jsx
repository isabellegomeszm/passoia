import "./bannershop.scss"
import bannershop from "../../../assets/banner-products.png"

function BannerShop() {
    return (
        <section className="banner-blog">
            <div className="banner-group">
                <img src={bannershop} alt="banner" />
                <h2>PASSOIA SHOP</h2>
            </div>
        </section>
    )
}

export default BannerShop;