import "./products.scss";
import ProductCard from "./productscard";

function Products({ productsdata }) {
  return (
    <section className="products-grid">
      {productsdata.map((item) => (
        <ProductCard 
          key={item.id} 
          product={item}
        />
      ))}
    </section>
  );
}

export default Products;
