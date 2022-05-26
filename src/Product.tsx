import { Rating } from "@mui/material";
import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating }: any) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <Rating
                    name="read-only"
                    value={rating}
                    precision={0.5}
                    readOnly
                />
            </div>
            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    );
};

export default Product;
