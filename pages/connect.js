import React from "react";
import Layout from "../components/shared/layout";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import Router from "next/router";

const connect = () => {
  const connectAccount = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => Router.push("/chatpage"))
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <div className="flex flex-col bg-white w-3/5 mx-auto py-10 rounded-md">
        <div className="flex flex-col gap-5 w-3/5 mx-auto">
          <h1 className="text-center font-semibold text-xl">
            Facebook page integration
          </h1>
          <button
            className="bg-background-primary rounded-md text-white py-4"
            onClick={connectAccount}
          >
            Connect page
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default connect;
