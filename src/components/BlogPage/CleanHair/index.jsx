import { useState } from "react";
import "./cleanhair.scss"
import cardblog2 from "../../../assets/cleanhair.png"

function CleanHair() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <section className="glossy-hair">
            <div className={`blog-card ${expanded ? "expanded" : ""}`}>
                <img className="card-img" src={cardblog2} alt="card-img" />

                    <div className="card-content">
                        <h3>Unlock the Secrets to Shine Glow for Your Hair</h3>

                        {!expanded && (
                            <div className="text">
                                <p>
                                    Who doesn't dream of hair that reflects light like a mirror and moves with a
                                    lightness that seems to defy gravity? This combination of mirror shine and
                                    touchable softness is the ultimate symbol of healthy, well-treated hair.
                                    Achieving this effect may look like magic, but in reality it comes from a 
                                    smart blend of science, effective products, right techniques and consistent habits. 
                                    Understanding how the cuticle behaves, and how to keep it aligned, sealed, 
                                    and hydrated, is the true first step toward glossy...
                                </p>
                            </div>
                         )}

                        {expanded && (
                            <div className="full-text">
                                <p>
                                    Who doesn't dream of hair that reflects light like a mirror and moves with a
                                    lightness that seems to defy gravity? This combination of mirror shine and
                                    touchable softness is the ultimate symbol of healthy, well-treated hair.
                                    Achieving this effect may look like magic, but in reality it comes from a 
                                    smart blend of science, effective products, right techniques and consistent habits. 
                                    Understanding how the cuticle behaves, and how to keep it aligned, sealed, 
                                    and hydrated, is the true first step toward glossy, glass-like shine.
                                </p>

                                <h4>1. The Science Behind Shine: Why the Cuticle Is Everything</h4>

                                <p>
                                    The ability of your hair to reflect light depends almost entirely on the cuticle, the outermost layer of the strand.
                                    When cuticles are aligned, smooth, and sealed, they create a glossy surface that behaves like a mirror.
                                    But when they’re raised, dry, or damaged, light scatters instead of reflecting, resulting in dull, lifeless hair. In other words: <strong>shine is a symptom of healthy cuticles</strong>.  
                                    And movement depends on <strong>flexibility + hydration</strong>.
                                </p>

                                <h4>2. Deep Hydration: The Foundation of Shine</h4>

                                <p>
                                    Shine starts with water. Hair needs internal hydration to stay flexible, smooth, and capable of reflecting light evenly.
                                    Dehydrated strands look rough and matte, even if you add oil on top.
                                </p>

                                <p><strong>Key Hydrating Ingredients:</strong></p>
                                    <ul>
                                        <li>D-Panthenol</li>
                                        <li>Hyaluronic Acid</li>
                                        <li>Aloe Vera</li>
                                        <li>Glycerin</li>
                                    </ul>
                                <p><strong>How to Apply:  </strong>  
                                    Use hydrating masks 1–2 times a week, and leave them on long enough for absorption (10–20 minutes).</p>


                                <h4>3. Sealing the Cuticles: Where Real Shine Happens</h4>

                                <p>
                                    After hydration, the next step is sealing the cuticles so the light can bounce off the hair’s surface.
                                    Lightweight oils and silicones create a smooth, reflective film:
                                </p>

                                    <ul>
                                        <li>Argan Oil</li>
                                        <li>Jojoba Oil</li>
                                        <li>Grapeseed Oil</li>
                                        <li>Volatile silicones (great for gloss without heaviness)</li>
                                    </ul>

                                <p><strong>Pro Tip: </strong>  
                                Apply these only on the lengths and ends to avoid greasiness.</p>

                                <h4>4. Thermo-Activated Finishers: Shine Boosters</h4>
                                <p>
                                    Heat + a good finisher is the secret behind glass-like gloss.  
                                    With heat, these products melt into the cuticle, sealing it even better.
                                </p>

                                <p><strong>Use them before blow-drying or flat ironing.</strong></p>

                                <h4>5. Lightweight Products: Avoid Overloading</h4>
                                <p>
                                    Heavy creams and thick oils make the hair look flat and dull.  
                                    If you want shine and movement, choose lightweight textures.
                                </p>

                                <h4>6. Smart Washing Techniques</h4>
                                <p>
                                    The washing step is essential and often overlooked.  
                                    Hot water opens the cuticles excessively, leading to roughness and frizz.
                                </p>

                                <h4>7. Friction Control: Protect the Shine You Just Built</h4>

                                <p>
                                    Friction is one of the biggest enemies of shine. Anything that rubs against your hair can lift the cuticles.
                                </p>
                                <ul>
                                    <li>Use satin pillowcases.</li>
                                    <li>Dry hair with microfiber towels or cotton t-shirts.</li>
                                    <li>Detangle gently from the tips to the roots.</li>
                                </ul>

                                <p>
                                    These small habits drastically improve shine and reduce breakage.
                                </p>

                                <h4>8. Protein Balance: Strength Without Stiffness</h4>
                                <p>
                                    Proteins fill damaged areas and reinforce the structure of the hair, but excess protein causes stiffness and dullness.
                                </p>

                                <p>
                                    Balanced hair = shiny, flexible, and silky.
                                </p>

                                <h4>9. Finishing Glosses & Shine Sprays: </h4>

                                <p>
                                    These products are like a “top coat” for hair, they reflect light, polish the surface, and enhance movement.
                                </p>

                                <p><strong>Best applied: </strong> after styling, lightly over mid-lengths and ends.</p>

                                <h4>10. Regular Trims:</h4>

                                <p>
                                    Split ends scatter light and create a frizzy, dull appearance.  
                                    A simple trim every 8–10 weeks keeps hair aligned and shiny from root to tip.
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