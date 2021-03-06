import Layout from "../components/shared/layout";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const login = () => {
  const { signInUser, forgotPassword } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handlelogin = (e) => {
    e.preventDefault();
    console.log(data);
    if (data.email && data.password) {
      signInUser(data.email, data.password)
    }
  };
  return (
    <Layout>
      <form
        className="flex flex-col bg-white w-3/5 mx-auto py-10 rounded-md"
        onSubmit={handlelogin}
      >
        <div className="flex flex-col gap-5 w-2/3 mx-auto">
          <h1 className="text-center font-semibold text-xl">
            Login to your account
          </h1>
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
            New to app{" "}
            <Link href="/">
              <span className="text-background-primary font-bold cursor-pointer">
                Sign in
              </span>
            </Link>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default login;
