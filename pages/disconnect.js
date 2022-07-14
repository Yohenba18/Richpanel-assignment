import React from "react";
import Layout from "../components/shared/layout";

const disconnect = () => {
  return (
    <Layout>
      <div className="flex flex-col bg-white w-3/5 mx-auto jus py-10 rounded-md">
        <div className="flex flex-col gap-5 w-2/3 mx-auto">
          <h1 className="text-center font-semibold text-xl">Facebook page</h1>
          <h1 className="text-center text-lg">
            Integrated page:{" "}
            <spam className="font-semibold">Amazon business</spam>
          </h1>

          <button className="bg-red-500 rounded-md text-white py-4 mt-4">
            Delete Integration
          </button>
          <button className="bg-background-primary rounded-md text-white py-4">
            Reply to messages
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default disconnect;
