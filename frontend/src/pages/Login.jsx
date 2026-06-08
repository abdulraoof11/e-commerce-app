import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("login"); // login | signup

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state, formData);
  };

  return (
    <div className="mt-5 flex items-center justify-center  px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center mb-2">
          {state === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
        </h1>

        <p className="text-center text-gray-500 mb-6">
          {state === "login"
            ? "Login to continue shopping"
            : "Sign up to start your journey"}
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME (SIGNUP ONLY) */}
          {state === "signup" && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
          >
            {state === "login" ? "Login" : "Create Account"}
          </button>
        </form>

        {/* SWITCH */}
        <p className="text-center text-sm text-gray-600 mt-6">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            onClick={() =>
              setState(state === "login" ? "signup" : "login")
            }
            className="ml-2 text-black font-semibold hover:underline"
          >
            {state === "login" ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;