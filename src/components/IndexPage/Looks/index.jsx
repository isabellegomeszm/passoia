import "./looks.scss"
import { useNavigate } from "react-router-dom";
import lips from "../../../assets/Card-1.png"
import eyes from "../../../assets/Card-2.png"
import face from "../../../assets/Card-3.png"
import hair from "../../../assets/Card-4.png"


function Looks() {
    const navigate = useNavigate();

    return (
        <section id="looks" className="looks">
            <h2>BEAUTY LOOKS & TIPS</h2>

            <div className="looks-conteiner">   
                <div className="lips" onClick={() => navigate("/looks?categoria=lips")}>
                    <img src={lips} alt="Close-up of a lips" />
                    <button className="btn-lips" onClick={() => navigate("/looks?categoria=lips")}>LIPS</button>
                </div>
                <div className="eyes"onClick={() => navigate("/looks?categoria=eyes")}>
                    <img src={eyes} alt="Golden eyeshadow and highlighted eyebrows in a close-up" />
                    <button className="btn-eyes" onClick={() => navigate("/looks?categoria=eyes")}>EYES</button>
                </div>
                <div className="face"onClick={() => navigate("/looks?categoria=face")}>
                    <img src={face} alt="woman applying skincare to her face" />
                    <button className="btn-face" onClick={() => navigate("/looks?categoria=face")}>FACE</button>
                </div>
                <div className="hair" onClick={() => navigate("/looks?categoria=hair")}>
                    <img src={hair} alt="smiling woman with curly hair" />
                    <button className="btn-hair" onClick={() => navigate("/looks?categoria=hair")}>HAIR</button>
                </div>   
            </div>  
     
        </section>

)}

export default Looks; 