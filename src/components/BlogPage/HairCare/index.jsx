import { useState } from "react";
import "./haircare.scss"
import cardblog3 from "../../../assets/haircare.png"

function HairCare() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <section id="hair-care" className="glossy-hair">
            <div className={`blog-card ${expanded ? "expanded" : ""}`}>
                <img className="card-img" src={cardblog3} alt="card-img" />

                    <div className="card-content">
                        <h3>How to Create a Personalized and Effective Hair Care Routine</h3>

                        {!expanded && (
                            <div className="preview-text">
                                <p>
                                    Building the perfect hair care routine isn’t about copying trends, it’s about knowing 
                                    what your hair truly needs. Curl type, porosity, scalp condition, and lifestyle all 
                                    influence how your hair behaves and what products will actually work. By understanding 
                                    these factors, you can create a simple, consistent plan that keeps your strands healthier, 
                                    shinier, and easier to manage day after day. From choosing the right shampoo to balancing 
                                    hydration, nutrition, and protein, personalizing your routine is the key to real, long-term transformation…
                                </p>
                            </div>
                         )}

                        {expanded && (
                            <div className="full-text">
                                <p>
                                    Building the perfect hair care routine isn’t about copying trends, it’s about knowing 
                                    what your hair truly needs. Curl type, porosity, scalp condition, and lifestyle all 
                                    influence how your hair behaves and what products will actually work. By understanding 
                                    these factors, you can create a simple, consistent plan that keeps your strands healthier, 
                                    shinier, and easier to manage day after day. From choosing the right shampoo to balancing 
                                    hydration, nutrition, and protein, personalizing your routine is the key to real, long-term transformation.
                                </p>

                                <h4>1. Start by Knowing Your Hair Type</h4>

                                <p>
                                    Texture (straight, wavy, curly, coily), thickness (fine, medium, coarse) and
                                    porosity (low, medium, high) determine how your hair reacts to water, products,
                                    and styling. Start here — everything else follows.
                                </p>

                                <h4>2. Balance: Hydration, Nutrition, Protein</h4>

                                <p>
                                    A healthy routine alternates three pillars:
                                </p>
                                <ul>
                                    <li><strong>Hydration</strong> — water balance: aloe, panthenol, glycerin.</li>
                                    <li><strong>Nutrition</strong> — lipids and softness: oils, butters, emollients.</li>
                                    <li><strong>Protein</strong> — strength and repair: keratin, amino acids (use with balance).</li>
                                </ul>

                                <h4>3. Choose the Right Shampoo and Conditioner</h4>

                                 <p>
                                    Match shampoo to your scalp (oily vs dry) and conditioner to your strand needs
                                    (light detangling vs deep nourishment). For curlier hair prefer sulfate-free,
                                    moisturizing formulations.
                                </p>

                
                                <h4>4. Treat with Purpose</h4>
                                 <p>
                                    Masks, leave-ins and serums are tools — use each for a specific goal (hydration,
                                    nutrition, or repair). Rotate masks (hydrating vs protein) according to how your
                                    hair responds.
                                </p>


                                <h4>5. Style According to Texture</h4>
                                <p>
                                    Your styling products should amplify your natural texture: gels/creams for curls,
                                    lightweight serums for wavy/straight hair, richer creams for coarse strands.
                                </p>

                                <h4>6. Don’t Skip Heat Protection</h4>
                                <p>
                                    Even if you avoid heat, protect your hair from friction (satin pillowcases,
                                    microfiber towels) and environmental stressors. Trim regularly to remove split ends.
                                </p>

                                <h4>7. Be Consistent, Not Perfect</h4>

                                <p>
                                    The best routine is one you will do consistently. Small, intentional habits
                                    repeated weekly create big changes over months.
                                </p>

                                <strong>Weekly Example Routine</strong>
                                    <ol>
                                        <li>Day 1 — Wash with a gentle cleanser + hydrating mask (10–20 min).</li>
                                        <li>Day 3 — Co-wash or light cleanse + leave-in for detangling.</li>
                                        <li>Day 5 — Nourishing oil or conditioner rinse on lengths and ends.</li>
                                        <li>Daily — light leave-in or serum to refresh and protect.</li>
                                    </ol>
                                

                                <p>
                                    Personalization is the skill: test, observe, adjust. Over time you'll know which
                                    sequence gives you the healthiest, most beautiful results.
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

export default HairCare;
