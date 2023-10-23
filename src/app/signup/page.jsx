"use client";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
import Link from "next/link.js";
import styles from "@/app/styles/style";
import Head from "next/head";
import { server } from "../serverURL";

function Page() {
  const router = useRouter();
  const [showPassword1, setShowPassword1] = useState(false);
  // const [showPassword2, setShowPassword2] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

const HandelSubmit = async (e) => {
  e.preventDefault();
 const config = {
   headers: {
     "Content-Type": "multipart/form-data",
     Accept: "application/json", // Add this line
   },
  };
  const newform = new FormData();

  newform.append("name", user.name);
  newform.append("email", user.email);
  newform.append("password", user.password);
  newform.append("phoneNumber", user.phoneNumber);

  axios
    .post("http://localhost:3000/api/user/signup", newform, config, {
      withCredential: true,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};


  return (
    <div>
      <Head></Head>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create on your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-3" onSubmit={HandelSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={user.name}
                    onChange={handelChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  phoneNumber
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    name="phoneNumber"
                    autoComplete="phoneNumber"
                    required
                    value={user.phoneNumber}
                    onChange={handelChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

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
                    value={user.email}
                    onChange={handelChange}
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
                    type={showPassword1 ? "text" : "password"}
                    name="password"
                    autoComplete="curent-password"
                    required
                    value={user.password}
                    onChange={handelChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  />
                  {showPassword1 ? (
                    <AiOutlineEye
                      className=" absolute right-3 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setShowPassword1(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className=" absolute right-3 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setShowPassword1(true)}
                    />
                  )}
                </div>
              </div>
              {/* <div>
                <label
                  htmlFor="cpassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    name="cpassword"
                    autoComplete="curent-password"
                    required
                    value={user.cpassword}
                    onChange={handelChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-400 focus:border-blue-500 sm:text-sm"
                  />
                  {showPassword2 ? (
                    <AiOutlineEye
                      className=" absolute right-3 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setShowPassword2(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className=" absolute right-3 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setShowPassword2(true)}
                    />
                  )}
                </div>
              </div> */}
              {/* <div>
                <label
                  htmlFor="avatar"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <div className="mt-2 flex items-center ">
                  <span className="h-9 w-9 rounded-full overflow-hidden inline-block">
                    {avatar ? (
                      <img
                        src={URL.createObjectURL(avatar)}
                        alt="avatar"
                        className=" h-full w-full object-cover rounded-full"
                      />
                    ) : (
                      <RxAvatar className="h-8 w-8" />
                    )}
                  </span>
                  <label
                    htmlFor="file-input"
                    className="ml-5 flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-md text-sm font-medium text-gray-800 bg-white hover:bg-gray-100"
                  >
                    <span>upload file</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept=".jpg,.jpeg,.png"
                      onChange={handelFileInputChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div> */}

              <div>
                <button
                  type="submit"
                  className=" group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white shadow-sm bg-blue-600 hover:bg-blue-800 "
                >
                  SignUp
                </button>
              </div>
              <div className={`${styles.normalFlex} w-full`}>
                <h4> Already have an account?</h4>
                <Link href="/login" className="text-blue-500 p-2">
                  {" "}
                  Login
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
