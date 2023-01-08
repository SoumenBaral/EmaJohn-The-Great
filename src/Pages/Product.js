import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Product = ({ product, handleAddToCart }) => {
    // const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='relative border-orange-400 w-[300px] h-[510px] border rounded-md'>
            <img className='ml-2 my-3 mr-3 w-[286px] h-[286px]' src={img} alt=""></img>
            <div className='my-3 mx-3'>
                <p className='text-xl'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='w-[100%] hover:bg-orange-400 p-1 bg-orange-200 absolute bottom-0 flex items-center justify-center' >
                <p className='text-lg mr-2'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;