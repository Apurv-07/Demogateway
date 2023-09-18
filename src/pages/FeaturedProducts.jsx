import React from 'react';
import './FeaturedProducts.css'; // Import your CSS file
import data from '../Shopdata';
import { Link, useNavigate } from 'react-router-dom';

const FeaturedProducts = (props) => {
    const navigate=useNavigate();
    console.log(props, "Props to featured")
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      {data.map((item, index)=>{
        if(index<4){
            return (
                <div key={item.id} className="product-card">
        <img src={item.photo} alt={item.name} width="200" height="200" />
        <h3>{item.name}</h3>
        <p>Description of Product 1.</p>
        <span className="product-price">Rs. {item.price}</span>
        <button  className="button align-item-center mt-2" onClick={()=>props.addTocart(item)}>Add to cart</button>
        <button  className="button align-item-center mt-2" onClick={()=>navigate(`/${item.id}`)}>View</button>
      </div>
            )
        }
      })}
      {/* Add more product cards as needed */}
    </section>
  );
};

export default FeaturedProducts;
