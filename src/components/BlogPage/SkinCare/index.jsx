import { useState } from "react";
import "./skincare.scss"
import cardblog2 from "../../../assets/skincare.png"

function SkinCare() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <section id="skin-care" className="glossy-hair">
            <div className={`blog-card ${expanded ? "expanded" : ""}`}>
                <img className="card-img" src={cardblog2} alt="card-img" />

                    <div className="card-content">
                        <h3>Why You Should Never Skip Cleansing and Primer Before Makeup</h3>

                        {!expanded && (
                            <div className="preview-text">
                                <p>
                                    A flawless makeup look doesn’t start with foundation, it starts with skin prep.
                                    Cleansing removes the buildup that interferes with smooth application, while primer
                                    creates the ideal surface for foundation to glide, grip, and last all day.
                                    Skipping these two steps is the number one reason makeup cracks, separates, or looks
                                    patchy within hours...
                                </p>
                            </div>
                         )}

                        {expanded && (
                            <div className="full-text">
                                <p>
                                    A flawless makeup look doesn’t start with foundation, it starts with skin prep.
                                    Cleansing removes the buildup that interferes with smooth application, while primer
                                    creates the ideal surface for foundation to glide, grip, and last all day.
                                    Skipping these two steps is the number one reason makeup cracks, separates, or looks
                                    patchy within hours.
                                </p>

                                <h4>1. Cleansing: Removing What Your Skin Doesn’t Need</h4>

                                <p>
                                    Throughout the day (and night), your skin accumulates oil, sweat, pollution,
                                    sunscreen, and product residue. Even if it doesn’t look dirty, this buildup creates
                                    an uneven surface that makes foundation slide and cling to texture.
                                </p>

                                <p><strong>What proper cleansing does:</strong></p>
                                <ul>
                                    <li>Removes dirt and excess oil that interfere with makeup adhesion.</li>
                                    <li>Prevents clogged pores and texture from showing under foundation.</li>
                                    <li>Leaves the skin fresh, smooth, and balanced — the perfect base.</li>
                                </ul>


                                <h4>2. Why Primer Is Essential</h4>

                                 <p>
                                    Primer acts as a bridge between skincare and makeup. It creates a silky, even
                                    surface that helps foundation apply smoothly and stay in place — especially in heat,
                                    humidity, or long events.
                                </p>

                                <p><strong>What primer does:</strong></p>
                                <ul>
                                    <li>Smooths pores, lines, and uneven texture.</li>
                                    <li>Controls excess shine for oily/combo skin.</li>
                                    <li>Prevents foundation from oxidizing or shifting.</li>
                                    <li>Improves durability — makeup lasts hours longer.</li>
                                </ul>

                                <h4>3. Choosing the Right Primer for Your Skin Type</h4>

                                <ul>
                                    <li><strong>Oily skin:</strong> mattifying, oil-control primers.</li>
                                    <li><strong>Dry skin:</strong> hydrating primers with hyaluronic acid.</li>
                                    <li><strong>Textured skin:</strong> blurring or pore-filling formulas.</li>
                                    <li><strong>Redness-prone skin:</strong> green-toned color-correcting primers.</li>
                                </ul>


                                <h4>4. How Cleansing + Primer Transform Your Makeup</h4>
                                <p>
                                    When these two steps are done correctly, makeup instantly looks more refined:
                                </p>

                                <ul>
                                    <li>Foundation glides instead of tugging.</li>
                                    <li>Coverage becomes more even and natural.</li>
                                    <li>Blush and contour blend more seamlessly.</li>
                                    <li>The skin looks smoother with fewer visible imperfections.</li>
                                    <li>Your makeup survives heat, sweat, and long days.</li>
                                </ul>

                                <h4>5. The Ideal Pre-Makeup Routine</h4>
                                <ol>
                                    <li>Cleanse with a gentle, non-stripping cleanser.</li>
                                    <li>Apply a lightweight moisturizer suitable for your skin type.</li>
                                    <li>Finish with a primer that matches your skin needs.</li>
                                </ol>

                                
                                <p>
                                    These small steps take less than two minutes — but they completely elevate the
                                    quality, smoothness, and durability of your makeup. Preparation isn’t optional:
                                    it’s the secret behind every polished look.
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

export default SkinCare;
