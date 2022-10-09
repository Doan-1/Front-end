import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({props}) => {
    const {product, index} = props
    return (
        <div className='p-3' key={index}>
            <div className='w-80 h-80 rounded overflow-hidden mb-4'>
                <img className='w-full h-full object-cover' src={product.thumbnail || "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0a1c535a-5d25-46cb-b439-9c2451c9e8e0/air-jordan-1-low-g-golf-shoes-94QHHm.png"} alt="" />
            </div>
            <Link to={"/productinfo/" + product.slug} className='no-underline'>
                <h3 className='font-theme text-2xl font-medium leading-5 text-content my-3 cursor-pointer'>{product.product_name || "ProductName"}</h3>
            </Link>
            <span className='font-theme text-xl font-normal leading-4 text-content mt-2'>${product.product_price || "50$"}</span>
        </div>

    )
}

export default ProductItem;