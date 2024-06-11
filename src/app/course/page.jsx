import React from "react";
async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
const Course = async () => {
  await takeTime();
  throw new Error("this is mannual error");
  return <p className="text-2xl ">hi manish</p>;
};

export default Course;
