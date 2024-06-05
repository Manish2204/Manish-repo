import React from "react";

function C({ params }) {
  console.log(params);
  return <div>{params.c}</div>;
}

export default C;
