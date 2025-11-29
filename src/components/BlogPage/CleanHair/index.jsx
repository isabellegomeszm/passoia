import { useState } from "react";
import "./cleanhair.scss"
import cardblog5 from "../../../assets/cleanhair.png"

function CleanHair() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <section id="clean-hair" className="glossy-hair">
            <div className={`blog-card ${expanded ? "expanded" : ""}`}>
                <img className="card-img" src={cardblog5} alt="card-img" />

                    <div className="card-content">
                        <h3>The Correct Technique for Deep Hair Cleansing</h3>

                        {!expanded && (
                            <div className="preview-text">
                                <p>
                                    Deep cleansing goes far beyond simply washing your hair, it resets your scalp,
                                    removes buildup, restores lightness, and makes treatments absorb better. But doing
                                    it incorrectly can leave the hair dry or unbalanced. The right technique keeps the
                                    scalp fresh without damaging the strands...
                                </p>
                            </div>
                         )}

                        {expanded && (
                            <div className="full-text">
                                <p>
                                    Deep cleansing (also called detox or clarifying cleansing) is crucial for anyone
                                    who uses leave-ins, oils, stylers, heat protectors, gels, or simply lives in a
                                    humid and polluted environment. When done correctly, it removes residue without
                                    harming the natural moisture of your hair and scalp.
                                </p>

                                <h4>1. Why Deep Cleansing Is Important</h4>

                                <p>
                                    Over time, products accumulate on the scalp and strands. This buildup blocks
                                    oxygenation, weighs the hair down, increases oiliness, and reduces the absorption
                                    of masks and treatments.
                                </p>

                                 <p><strong>Deep cleansing helps by:</strong></p>
                                <ul>
                                    <li>Removing product buildup (oils, creams, gels, silicones).</li>
                                    <li>Purifying the scalp and improving circulation.</li>
                                    <li>Restoring natural lightness and volume.</li>
                                    <li>Preparing the hair for treatments and hydration.</li>
                                </ul>


                                <h4>2. Choosing the Right Shampoo</h4>

                                <p>
                                    Not all strong shampoos are ideal. Look for formulas that clean deeply but do not
                                    strip the hair completely — especially if your hair is curly, wavy, or dry.
                                </p>
                                <p><strong>Good ingredients for deep cleansing:</strong></p>
                                <ul>
                                    <li>Salicylic acid (purifies scalp)</li>
                                    <li>Apple cider vinegar</li>
                                    <li>Charcoal or clay</li>
                                    <li>Refreshing extracts (mint, tea tree)</li>
                                </ul>

                                <h4>3. The Correct Deep Cleansing Technique</h4>

                                <ol>
                                    <li>
                                        Wet your hair thoroughly with warm water to open the cuticles and loosen debris.
                                    </li>
                                    <li>
                                        Apply the shampoo directly to the scalp, not the lengths — the foam is enough to clean the rest.
                                    </li>
                                    <li>
                                        Massage for **60–90 seconds** using fingertips (never nails), making circular motions.
                                    </li>
                                    <li>
                                        Rinse well. Most residue problems come from poor rinsing.
                                    </li>
                                    <li>
                                        Repeat only if necessary (oily scalp or lots of buildup).
                                    </li>
                                </ol>

                                <h4>4. What to Do After Deep Cleansing</h4>
                                <p>
                                    Since detoxing opens the cuticles, it is essential to follow with hydration or
                                    treatment to restore softness and shine.
                                </p>

                                <p><strong>Recommended next steps:</strong></p>
                                <ul>
                                    <li>Hydrating or smoothing mask.</li>
                                    <li>A lightweight conditioner to seal the cuticles.</li>
                                    <li>A leave-in suited to your curl pattern and texture.</li>
                                </ul>

                                <h4>5. How Often Should You Deep Cleanse?</h4>
                                <ul>
                                    <li><strong>Curly / Coily hair:</strong> every 3–4 weeks.</li>
                                    <li><strong>Wavy hair:</strong> every 2–3 weeks.</li>
                                    <li><strong>Straight or oily hair:</strong> every 1–2 weeks.</li>
                                    <li><strong>If you use many stylers:</strong> increase frequency.</li>
                                </ul>

                                <p>
                                    When performed correctly, deep cleansing does not dry out the hair — it revives it.
                                    It resets the scalp, enhances the performance of treatments, boosts shine, and
                                    improves hair movement.
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

export default CleanHair;