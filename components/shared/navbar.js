import React from "react";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import Router from "next/router";

const Navbar = () => {
  const { logoutUser } = useAuth();

  const handellogout = () => {
    try {
      logoutUser();
      Router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex gap-4 justify-end py-5 text-white mx-3">
      <Link href="/login">
        <h1>Login</h1>
      </Link>
      <Link href="/">
        <h1>Signup</h1>
      </Link>
      <button onclick={handellogout}>
        <h1>Disconnect</h1>
      </button>
    </div>
  );
};

export default Navbar;
