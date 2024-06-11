"use client";

// import { useState } from "react";
// let flag = false;
const GetPriceButton = ({ price, children }) => {
  const handleClick = (price) => {
    <p>{price}</p>;
    console.log(price);
  };
  //   if (price) {
  //     flag = true;
  //   } else {
  //     flag = false;
  //   }
  return (
    <button
      onClick={() => handleClick(price)}
      className="bg-blue-500 rounded-md p-1"
    >
      get price
      {children}
    </button>
  );
};

export default GetPriceButton;
// export default flag;
