import React from "react";
import Layout from "../components/shared/layout";
import { FacebookAuthProvider } from "firebase/auth";

const provider = new FacebookAuthProvider();

const connect = () => {
  return (
    <Layout>
      <div className="flex flex-col bg-white w-3/5 mx-auto py-10 rounded-md">
        <div className="flex flex-col gap-5 w-2/3 mx-auto">
          <h1 className="text-center font-semibold text-xl">
            Facebook page integration
          </h1>
          <button className="bg-background-primary rounded-md text-white py-4">
            Connect page
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default connect;
