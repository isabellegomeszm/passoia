import "./products.scss";
import ProductCard from "./productscard";

function Products({ productsdata, onAddToCart }) {
  return (
    <section className="products-grid">
      {productsdata.map((item) => (
        <ProductCard 
          key={item.id} 
          product={item} 
          addToCart={onAddToCart} 
        />
      ))}
    </section>
  );
}

export default Products;
