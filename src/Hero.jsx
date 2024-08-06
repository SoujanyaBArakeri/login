import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import "./Hero.css";

const Hero = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError(""); // Clear previous errors
  
    // Check if username contains "@gmail.com"
    if (!username.includes("@gmail.com")) {
      setError("Username must be a Gmail address.");
      return;
    }
  
    // Check if password meets criteria
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[@!#$%^&*()]).{6,12}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be 6-12 characters long, include at least one number, one uppercase letter, and one special character."
      );
      return;
    }
  
    // If validation passes, redirect to the specified URL
    window.location.href = "https://crypto-app-ashen-alpha.vercel.app";
  };
  
  

  return (
    <div className="h-[100vh] w-full bg-[#be95c4] flex justify-center items-center">
      <div className="hex1 h-[25%] w-[13%] absolute z-40 top-2 overflow-hidden rounded-full">
        <img
          src="https://i.pinimg.com/564x/de/5a/fc/de5afc70ab7728982879905a91eead5c.jpg"
          alt=""
          className="rounded-full h-[100%] w-[100%]"
        />
      </div>
      <div className="hex flex items-center justify-center flex-col gap-7 mt-20">
        <div className="h-[20vh] w-[80%] flex items-center justify-center">
          <span className="signin text-6xl text-white">Sign in</span>
        </div>
        <div className="h-[10%] w-[80%] relative">
          <div className="input-wrapper flex items-center border-2 border-gray-500 rounded-md p-2">
            <MdOutlineAccountCircle className="text-black mr-2 h-6 w-6" />
            <input
              type="text"
              placeholder="User Name"
              className="input bg-transparent outline-none text-black w-full text-xl"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="h-[10%] w-[80%] relative">
          <div className="input-wrapper flex items-center border-2 border-gray-500 rounded-md p-2">
            <CiLock className="text-black mr-2 h-6 w-6" />
            <input
              type="password"
              placeholder="Password"
              className="input bg-transparent outline-none text-black w-full text-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}
        <div className="h-[10vh] w-[80%] flex items-center justify-center">
          <button
            onClick={handleLogin}
            className="btnlogin h-[50px] w-[70%] text-white rounded-full text-2xl focus:outline-none focus:ring focus:ring-fuchsia-300"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
