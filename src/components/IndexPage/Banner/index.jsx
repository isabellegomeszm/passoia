import "./banner.scss"
import banner from "../../../assets/banner.png"

function Banner() {
    return (
        <section className="banner">
            <img src={banner} alt="banner" />
        </section>
    )
}

export default Banner;