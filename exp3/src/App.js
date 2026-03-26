import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ 
      display: "flex", 
      gap: "20px", 
      flexWrap: "wrap",
      padding: "20px"
    }}>
      
      <ProductCard 
        name="iPhone" 
        price={80000} 
        image="https://via.placeholder.com/150"
        inStock={true}
      />

      <ProductCard 
        name="Shoes" 
        price={3000} 
        image="https://via.placeholder.com/150"
        inStock={false}
      />

      <ProductCard 
        name="Laptop" 
        price={60000} 
        image="https://via.placeholder.com/150"
        inStock={true}
      />

    </div>
  );
}

export default App;