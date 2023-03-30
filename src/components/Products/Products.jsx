import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    
  return (
    <div className="flex  gap-3 w-full md:w-11/12 mx-auto my-8">
      <div className="w-full md:w-4/5 grid grid-cols-1 md:grid-cols-3 gap-2">
        {products.map((singleProduct) => (
          <Product singleProduct={singleProduct}></Product>
        ))}
      </div>

      <div className="card w-full md:w-1/4 mx-auto h-[70vh] bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Order Summery</h2>
          <p>Selected Items: </p>
          <p>Total Price: </p>
          <p>Total Shipping Charge: </p>
          <p>Tax: </p>
          <p>Grand Total: </p>
          <button className="btn btn-error">
            Clear Cart{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </span>
          </button>
          <button className="btn btn-success">
            Review Order{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
