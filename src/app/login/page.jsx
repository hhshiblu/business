"use client";

import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { toast } from "react-toastify";
import axios from "axios";

import Link from "next/link.js";
import { server } from "@/app/serverURL";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/style";
import Image from "next/image";
import {signIn} from "next-auth/react"
function Page() {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const hendelSubmit = async (e) => {
    e.preventDefault();
    try {
    // const res=  await signIn("credentials",{ email, password, redirect:false })
      await axios.post(
        `${server}user/login`,
        { email, password },
        { withCredentials: true }
      );
   

    } catch (error) {
      //   toast.error(error.response.data.message)
      console.log(error);
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={hendelSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="curent-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className=" absolute right-3 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className=" absolute right-3 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div className={`${styles.normalFlex} justify-between `}>
                <div className={`${styles.normalFlex}  `}>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded "
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block
                 text-gray-900"
                  >
                    {" "}
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="forgot-password"
                    className="font-medium text-blue-500 hover:text-blue-600"
                  >
                    Forgot password
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className=" group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white shadow-sm bg-blue-600 hover:bg-blue-800 "
                >
                  Login
                </button>
                          </div>
                              <div>
                <button
                  type="submit"
                  className=" group relative w-full h-[40px] flex justify-center py-2 px-4 border  text-sm font-medium rounded-md text-black shadow-sm  "
                >
                                  Sign in with Google  <span className='pl-1 pt-1'><Image src={ '/image/google.png'}  width={16} height={16} alt={'google.png'} /></span> 
                </button>
                          </div>
        
              <div className={`${styles.normalFlex} w-full`}>
                <h4> Not have any account?</h4>
                <Link href="/signup" className="text-blue-500 p-2">
                  {" "}
                  SignUp
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
