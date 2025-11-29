import "./news.scss"
import { useNavigate } from "react-router-dom";
import cardblog1 from "../../../assets/glossyhair.png"
import cardblog2 from "../../../assets/foundation.png"
import cardblog5 from "../../../assets/cleanhair.png"
import backgound from "../../../assets/background-blog.png"


function News() {
    const navigate = useNavigate();

    return (
        <section className="news">
            <h2>EXPLORE OUR BLOG</h2>
            
            <img className="background" src={backgound} alt="" />

            <div className="cards">
                <div className="blog">
                    <img className="glossy-img" src={cardblog1} alt="" />
                    <button className="btn-glossy" onClick={() => navigate("/blog#glossy-hair")}>Unlock the Secrets to Glass-Like Shine for Your Hair</button>
                </div>

                <div className="blog">
                    <img className="foundation-img" src={cardblog2} alt="" />
                    <button className="btn-foundation" onClick={() => navigate("/blog#foundation")}>The Definitive Guide to Finding Your Perfect Foundation Shade</button>
                </div>

                <div className="blog">
                    <img className="clean-img" src={cardblog5} alt="" />
                    <button className="btn-clean" onClick={() => navigate("/blog#clean-hair")}>The Correct Technique for Deep Hair Cleansing</button>
                </div>
            </div>     
        </section>
    )
}

export default News;