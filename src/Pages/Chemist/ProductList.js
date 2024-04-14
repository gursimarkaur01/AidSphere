import React from 'react';
import "./ProductList.css";
import Footer from '../Footer/Footer';
const products = [
 { id: 1, name: 'Chemist 1', description: 'Greater Kailash' },
 { id: 2, name: 'Chemist2', description: 'Lajpat' },
 { id: 3, name: 'Chemist 3', description: 'Hari Nagar' },
 { id: 4, name: 'Chemist 4', description: 'Ramesh Nagar' },
 { id: 5, name: 'Chemist 5', description: 'Greater Kailash' },
 { id: 6, name: 'Chemist 6', description: 'Lajpat' },
 { id: 7, name: 'Chemist 7', description: 'Hari Nagar' },
 { id: 8, name: 'Chemist 8', description: 'Ramesh Nagar' },
 
 // Add more products as needed
];

const ProductList = () => {
 return (
  <>
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
   
</>

 );
};

export default ProductList;
<Footer></Footer>