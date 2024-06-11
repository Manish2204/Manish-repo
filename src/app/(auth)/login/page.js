import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="w-[50vw] h-[100vh] bg-white text-black ">
        login page
        <div>
          {" "}
          <br></br>
          <Link href="/" className="text-black">
            go to sign-up page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
