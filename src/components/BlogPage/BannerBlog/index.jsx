import "./bannerblog.scss"
import bannerblog from "../../../assets/Bannerblog2.png"

function BannerBlog() {
    return (
        <section className="banner-blog">
            <div className="banner-group">
                <img src={bannerblog} alt="banner blog" />
                <h2>PASSOIA BLOG</h2>
            </div>
        </section>
    )
}

export default BannerBlog;