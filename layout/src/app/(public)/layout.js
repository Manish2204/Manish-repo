import React, { Children } from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div className="bg-white h-[100vh] flex flex-col justify-between">
        <div className="text-black">{children}</div>
        <div className="bg-slate-500 h-[10vh]">Footer</div>
      </div>
    </div>
  );
};

export default layout;
