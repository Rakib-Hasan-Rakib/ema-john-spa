import React from "react";

const Product = ({ singleProduct }) => {
  console.log(singleProduct);
  let { id, img, name, price, quantity, ratings, ratingsCount, seller } =
    singleProduct;
  return (
    <div className="">
      <div className="card card-compact w-ful bg-base-100 shadow-2xl border-2 border-primary">
        <figure className="h-50">
          <img className="w-full" src={img ? img : null} alt={img ? "shoes" : "Not Found"} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            Price: $<span>{price}</span>
          </p>
          <p>Ratings: {ratings}</p>
          <p>Manufacturer: {seller}</p>
          <div className="card-actions">
            <button className="btn btn-primary w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
