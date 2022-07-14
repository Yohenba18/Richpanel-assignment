import Link from "next/link";
import { useState } from "react";
import Layout from "../components/shared/layout";
import { useAuth } from "../contexts/AuthContext";
import Router from "next/router";
import App from "next/app";

export default function Home() {
  const { user, error, loading, registerUser } = useAuth();

  const [data, setData] = useState({
    name: "",
    email: null,
    password: "",
  });
  const handleSignup = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.email && data.password && data.name) {
      registerUser(data.email, data.password, data.name);
    }
  };

  console.log(error);

  if (loading) {
    return <div>Loading.....</div>;
  }

  if (user) {
    Router.push("/connect");
  }
  return (
    <Layout>
      <form
        className="flex flex-col bg-white w-3/5 mx-auto py-10 rounded-md"
        onSubmit={handleSignup}
      >
        <div className="flex flex-col gap-5 w-2/3 mx-auto">
          <h1 className="text-center font-semibold text-xl">Create Account</h1>
          <div className="flex flex-col">
            Name
            <input
              required
              type="text"
              className="border-2 rounded-md px-4 py-2"
              value={data.name}
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            Email
            <input
              required
              type="email"
              className="border-2 rounded-md px-4 py-2"
              value={data.email}
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            Password
            <input
              required
              type="password"
              className="border-2 rounded-md px-4 py-2"
              value={data.password}
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
            />
          </div>
          <button
            className="bg-background-primary rounded-md text-white py-4"
            type="submit"
          >
            Sign Up
          </button>
          <div>
            Already have an account{" "}
            <Link href="/login">
              <span className="text-background-primary font-bold cursor-pointer">
                Login
              </span>
            </Link>
          </div>
        </div>
      </form>
    </Layout>
  );
}
