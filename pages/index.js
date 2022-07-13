import Link from "next/link";
import { useState } from "react";
import Layout from "../components/shared/layout";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
  };

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
              type="text"
              className="border-2 rounded-md px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            Email
            <input
              type="email"
              className="border-2 rounded-md px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            Password
            <input
              type="password"
              className="border-2 rounded-md px-4 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              <span className="text-background-primary font-bold">Login</span>
            </Link>
          </div>
        </div>
      </form>
    </Layout>
  );
}
