import Link from "next/link";
import React from "react";

const auth = () => {
  return (
    <div>
      <div className="w-[50vw] h-[100vh]  bg-white text-black ">
        sign-up page
        <div>
          {" "}
          <br></br>
          <Link href="/login" className="text-black">
            go to login page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default auth;
