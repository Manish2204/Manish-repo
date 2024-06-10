import React from "react";

const Authlayout = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex">
      <div className="w-[50vw]  bg-slate-600">commom</div>
      <div>{children} </div>
    </div>
  );
};

export default Authlayout;
