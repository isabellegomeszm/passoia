//hooks são funções especiais do react;
// useState ele controla os estados de algo na interface
//antes do return fica a lógica, após o return fica as tags

import "./launches.scss"
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useBag } from "../../../context/BagContext"
import { useNavigate } from "react-router-dom";


import red from "../../../assets/model-red.png";
import pink from "../../../assets/model-pink.png";
import purple from "../../../assets/model-purple.png";
import orange from "../../../assets/model-orange.png";

import batom1 from "../../../assets/Lipstick-red.png"
import batom2 from "../../../assets/Lipstick-purple.png"
import batom3 from "../../../assets/Lipstick-pink.png"

import liquidRed from "../../../assets/liquid-red.png";
import liquidPink from "../../../assets/liquid-pink.png";
import liquidOrange from "../../../assets/liquid-orange.png";
import liquidPurple from "../../../assets/liquid-purple.png";


function Lauches(){

    const navigate = useNavigate();
    
    const { addToBag } = useBag();

    const [color, setcolor] = useState(pink);
    const [productImage, setProductImage] = useState(liquidPink);
    
    const [alert, setAlert] = useState(false);

    const handleAddBag = () => {
        
        const product = {
            id: 12,
            name: "Flawless 16H Matte Liquid Lipstick",
            price: 69.90,
            quantity: 1,
            image: productImage,
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

                    <h3>Flawless 16H Matte Liquid Lipstick</h3>
                    <h3><strong>R$ 69.90</strong></h3>
                    <p className="colors">Available colors</p>

                    <div className="colors">
                        <button className="btn-pink"  onClick={() => {setcolor(pink); setProductImage(liquidPink);}}></button>
                        <button className="btn-purple" onClick={() => {setcolor(purple); setProductImage(liquidPurple);}}></button>
                        <button className="btn-orange" onClick={() => {setcolor(orange); setProductImage(liquidOrange);}}></button>
                        <button className="btn-red" onClick={() => {setcolor(red); setProductImage(liquidRed);}}></button>
                    </div>
                    <p className="description-title">Description</p>
                    <p className="description">Flawless 16H Matte Liquid Lipstick has an innovative formula developed to deliver maximum color on the first application with a smooth and soft glide. It has a velvety matte finish and mango butter that helps moisturize and protect lips from dryness. It helps moisturize lips and has a fine, soft texture that does not weigh down the lips.</p>
                
                    <div className="btn-icon">
                      <button className="btn-add" 
                      onClick={handleAddBag}
                      > Add to bag
                      <HiOutlineShoppingBag className="bag-icon" />
                      </button>
                    </div>
                    <button className="more-products" onClick={() => navigate("/products")}><strong>See more products</strong></button>
                </div>
            </div>
        

        </section>
    );
}

export default Lauches;