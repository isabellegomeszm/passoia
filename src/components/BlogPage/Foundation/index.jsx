import { useState } from "react";
import "./foundation.scss"
import cardblog2 from "../../../assets/foundation.png"

function Foundation() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <section className="glossy-hair">
            <div className={`blog-card ${expanded ? "expanded" : ""}`}>
                <img className="card-img" src={cardblog2} alt="card-img" />

                    <div className="card-content">
                        <h3>The Definitive Guide to Finding Your Perfect Foundation Shade</h3>

                        {!expanded && (
                            <div className="text">
                                <p>
                                    Finding the perfect foundation shade can feel overwhelming (undertones), lighting, 
                                    oxidation, and texture all seem to complicate the process. But achieving a seamless 
                                    match isn’t luck; it’s a method. By understanding your undertone, skin depth, and the 
                                    science behind how pigments behave on the skin, you can finally choose a foundation 
                                    that blends naturally and enhances your real complexion. Learning how to test shades 
                                    correctly, when to check oxidation, and how to pick formulas based on your skin type 
                                    is the true first step to flawless foundation...
                                </p>
                            </div>
                         )}

                        {expanded && (
                            <div className="full-text">
                                <p>
                                    Finding the perfect foundation shade can feel overwhelming (undertones), lighting, 
                                    oxidation, and texture all seem to complicate the process. But achieving a seamless 
                                    match isn’t luck; it’s a method. By understanding your undertone, skin depth, and the 
                                    science behind how pigments behave on the skin, you can finally choose a foundation 
                                    that blends naturally and enhances your real complexion. Learning how to test shades 
                                    correctly, when to check oxidation, and how to pick formulas based on your skin type 
                                    is the true first step to flawless foundation.
                                </p>

                                <h4>1. Understanding Your Undertone: The True First Step</h4>

                                <p>Your undertone determines how your skin behaves under different shades of foundation.</p>
                                <p><strong>The three main undertones are:</strong></p>
                                <ul>
                                    <li><strong>Warm: </strong> Golden, yellow, or peachy.</li>
                                    <li><strong>Cool: </strong> Pink, rosy, or slightly bluish.</li>
                                    <li><strong>Neutral:</strong> A balanced mix between warm and cool.</li>
                                </ul>

                                <p><strong>Quick test:</strong> Check your veins — greenish = warm, bluish/purple = cool, a mix = neutral.</p>

                                <h4>2. Skin Depth: Your Shade Level Matters</h4>

                                <p>
                                    Shade depth refers to how light or deep your skin is. Foundations usually range from
                                    fair → light → medium → tan → deep → rich.
                                </p>

                                <p>
                                    Many mismatches happen because people identify their undertone correctly but choose the
                                    wrong depth. Always match both.
                                </p>                                    

                                <h4>3. Where to Test Your Foundation for Real Accuracy</h4>

                                <p>
                                    Testing on your wrist or hand is convenient, but rarely accurate. The best area to test is:
                                </p>

                                <ul>
                                    <li><strong>The jawline</strong>: Blends face + neck tones.</li>
                                    <li><strong>Under natural light</strong>: Always step near a window.</li>
                                </ul>

                                <p>
                                    The perfect shade disappears into your skin without leaving a cast or looking too yellow,
                                    orange, or pink.
                                </p>

                                <h4>4. Consider Oxidation: Why Shades Get Darke</h4>
                                <p>
                                    Some foundations darken after 5–15 minutes because of exposure to air or skin oils.
                                    This is called oxidation.
                                </p>

                                <p><strong>How to avoid surprises:</strong></p>
                                <ul>
                                    <li>Apply a small amount on the jaw.</li>
                                    <li>Wait a few minutes to see the “real” shade.</li>
                                    <li>If it oxidizes a lot → choose one tone lighter.</li>
                                </ul>

                                <h4>5. Your Skin Type: Determines the Best Formula</h4>
                                <p>
                                    The wrong formula can make a perfect shade look wrong. Choose according to your skin's needs:
                                </p>

                                <ul>
                                    <li><strong>Oily skin:</strong> Matte, oil-free, long-wear formulas.</li>
                                    <li><strong>Dry skin:</strong> Hydrating, luminous, creamy foundations.</li>
                                    <li><strong>Combination:</strong> Semi-matte or natural finish foundations.</li>
                                    <li><strong>Sensitive:</strong> Fragrance-free, mineral or dermatological lines.</li>
                                </ul>

                                <h4>6. Face + Neck Harmony: The Most Overlooked Step</h4>
                                <p>
                                    A shade that matches your face but not your neck creates imbalance. The ideal shade blends
                                    both naturally, creating a unified look in photos and natural light.
                                </p>

                                <h4>7. Two-Shade Technique for the Most Natural Result</h4>

                                <p>Makeup artists often use:</p>

                                <ul>
                                    <li><strong>One shade for the center</strong> of the face (usually slightly lighter).</li>
                                    <li><strong>One shade for the outer areas</strong> (more natural to your depth).</li>
                                </ul>
                                    
                                <p>This creates dimension without heavy contouring.</p>

                                <p>
                                    Matching foundation is not guesswork — it’s technique. When you understand your undertone,
                                    shade depth, skin type, and how to properly test, you gain control over your entire makeup
                                    routine. Soon, choosing the right foundation will feel effortless, and your skin will look
                                    naturally flawless in any light.
                                </p>
                                
                            </div>
                        )}

                        <button onClick={toggleExpand} className="toggle-btn">
                            {expanded ? "Read less" : "Read more"}
                        </button>
                    </div>
                </div>
        </section>
    );
}

export default Foundation;