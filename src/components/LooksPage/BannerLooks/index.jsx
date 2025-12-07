import "./bannerlooks.scss"
import bannerlooks from "../../../assets/banner-looks.png"

function BannerLooks() {
    return (
        <section className="banner-blog-looks">
            <div className="banner-group-looks">
                <img src={bannerlooks} alt="banner" />
                <h2>BEAUTY LOOKS, TIPS & TUTORIALS</h2>
            </div>
        </section>
    )
}

export default BannerLooks;