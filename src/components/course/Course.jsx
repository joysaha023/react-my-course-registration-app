import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const course = ({ course }) => {
 const { name, description, photo, price, credit} = course;


  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img className="p-4"
            src={photo}
            alt="product_img"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}!</h2>
          <p>{description}</p>
          <div>
            <p><BsCurrencyDollar />Price: {price}</p>
            <p></p>
          </div>
          <div className="card-actions justify-end">
          <button className="btn btn-primary text-white btn-block">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default course;
