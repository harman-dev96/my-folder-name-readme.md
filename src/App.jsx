import "./App.css";

function ProductCard({ name, price, image, inStock }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>₹{price}</p>
      <p className={inStock ? "yes" : "no"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="product-grid">
      <ProductCard
        name="Laptop"
        price={50000}
        inStock={true}
      />
      <ProductCard
        name="Phone"
        price={20000}
        inStock={false}
      />
      <ProductCard
        name="Watch"
        price={5000}
        inStock={true}
      />
    </div>
  );
}

export default App;