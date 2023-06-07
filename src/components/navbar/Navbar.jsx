import React from "react";

import { riMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center py-8 px-24">
      <div className=" flex-1 flex justify-start items-center">
        <div className=" mr-8">
          <img className="w-[62.56px] h-[16.02px]" src={logo} alt="logo" />
        </div>
        <div className=" flex flex-row text-white font-manrope font-medium text-base capitalize ">
          <p className=" my-0 mx-4 cursor-pointer">
            <a href="#home">HOME</a>
          </p>
          <p className=" my-0 mx-4 cursor-pointer">
            <a href="#wgpt3">What is GPT3?</a>
          </p>
          <p className=" my-0 mx-4 cursor-pointer">
            <a href="#possibility">Open AI</a>
          </p>
          <p className=" my-0 mx-4 cursor-pointer">
            <a href="#features">Case Studies</a>
          </p>
          <p className=" my-0 mx-4 cursor-pointer">
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="flex justify-end items-center text-white font-manrope font-medium text-base capitalize">
        <p className=" my-0 mx-4">SignIn</p>
        <button
          className=" bg-orange-600 py-4 px-8 rounded font-manrope font-medium text-base border-none outline-none cursor-pointer"
          type="button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
