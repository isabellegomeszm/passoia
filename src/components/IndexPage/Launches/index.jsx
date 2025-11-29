//hooks são funções especiais do react;
// useState ele controla os estados de algo na interface
//antes do return fica a lógica, após o return fica as tags

import "./launches.scss"
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

import red from "../../../assets/red.png";
import pink from "../../../assets/pink.png";
import purple from "../../../assets/purple.png";
import orange from "../../../assets/orange.png";
import batom1 from "../../../assets/liquid-red.png"
import batom2 from "../../../assets/liquid-purple.png"
import batom3 from "../../../assets/liquid-orange.png"

function Lauches({ addToBag }){

    const [color, setcolor] = useState(pink);

    const [alert, setAlert] = useState(false);

    const handleAddBag = () => {
        
        const product = {
            name: "Flawless 16H Matte Liquid Lipstick",
            selectedColor: color,
        };

        addToBag(product);

        setAlert(true);
        setTimeout(() => setAlert(false), 2000);
    };

    return(
        <section className="launches">
            <h2>ENJOY THE LAUNCHES</h2>

            {alert && ( 
                <div className="bag-alert">
                    Product added to bag!
                </div>
            )}

            <div className="container">
                <div className="col-1">
                    <img src={batom1} alt="red lipstick" />
                    <img src={batom2} alt="purple lipstick" />
                    <img src={batom3} alt="orange lipstick" />
                </div>

                <div className="col-2">
                    <img src={color} alt="Lipstick color preview" />
                </div>

                <div className="col-3">
                    <div className="stars"> 
                        <StarIcon className="star" /> 
                        <StarIcon className="star" /> 
                        <StarIcon className="star" /> 
                        <StarIcon className="star" /> 
                        <StarIcon className="star" />
                    </div>

                    <h3>Matte Premium Lipstick</h3>
                    <p className="colors">Available colors</p>

                    <div className="colors">
                        <button className="btn-pink"  onClick={() => setcolor(pink)}></button>
                        <button className="btn-purple" onClick={() => setcolor(purple)}></button>
                        <button className="btn-orange" onClick={() => setcolor(orange)}></button>
                        <button className="btn-red" onClick={() => setcolor(red)}></button>
                    </div>
                    <p className="description-title">Description</p>
                    <p className="description">Matte Lipstick has an innovative formula developed to deliver maximum color on the first application with a smooth and soft glide. It has a velvety matte finish and mango butter that helps moisturize and protect lips from dryness. It helps moisturize lips and has a fine, soft texture that does not weigh down the lips.</p>
                
                    <button className="btn-add" onClick={handleAddBag}> Add to bag</button>
                </div>
            </div>
        </section>
    );
}

export default Lauches;