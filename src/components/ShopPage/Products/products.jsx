import "./products.scss";
import ProductCard from "./productscard";

function Products({ Products, onAddToCart }) {
  return (
    <section className="products-grid">
      {Products.map((item) => (
        <ProductCard 
          key={item.id} 
          product={item} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </section>
  );
}

export default Products;
