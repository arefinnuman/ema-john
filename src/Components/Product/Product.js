import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, category} = props.product;
    return (
        <div>
            <div className='product-container'>
                <img src={img} alt="" />
                <div className="product-info">
                    <h4>{name}</h4>
                    <h5>Price:{price}</h5>
                    <p><small>Manufactured by: {seller}</small></p>
                    <p>{category}</p>
                </div>
                <button className='btn-cart'>Add to cart</button>
            </div>

        </div>
    );
};

export default Product;