import React from "react";
import "./request.css";

const Request = ({request}) => {
    return (
        <li className="request">
            <span className="request-name">{request?request.name:''}</span>
            <div className="request-products">
                {
                    request && request.products && request.products.map(product => (
                        <div className="request-product" key={"product"+product.id}>
                            <span className="request-product-name">{product.name}</span>
                            <span className="request-product-weight">{product.weight}</span>
                        </div>
                    ))
                }
            </div>
        </li>
    );
}
export default Request;