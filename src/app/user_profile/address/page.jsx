"use client";
import { Division } from "@/app/staticData/data";
import styles from "@/styles/style";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

import { RxCross1 } from "react-icons/rx";

// import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function Address() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [division, setdivision] = useState("");
  const [district, setdistrict] = useState("");
  const [zipCode, setZipCode] = useState();
  const [address, setAddress] = useState("");
  const [addressType, setAddressType] = useState("");
  //   const { user, successMessage } = useSelector((state) => state.user);

  const addressTypeData = [
    {
      name: "Default",
    },
    {
      name: "Home",
    },
    {
      name: "Office",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      addressType === "" ||
      division === "" ||
      district === "" ||
      zipCode === "" ||
      address === ""
    ) {
      toast.error("Please fill all the fields!");
    } else {
      //   dispatch(
      //     updatUserAddress(
      //       name,
      //       number,
      //       division,
      //       district,
      //       address,
      //       zipCode,
      //       addressType
      //     )
      //   );

      // Assuming successMessage is set when the update is successful
      //   if (successMessage) {
      //     toast.success(successMessage);

      //     if (location.state && location.state.checkout) {
      //       // If location.state.checkout is true, navigate to "/checkout_products"
      //       navigate("/checkout_products");
      //     }
      //   }

      // Reset form fields and close the form
      setOpen(false);
      setdivision("");
      setdistrict("");
      setName("");
      setNumber("");
      setAddress("");
      setZipCode(null);
      setAddressType("");
    }
  };

  const handleDelete = (item) => {
    const id = item._id;
    // dispatch(deleteUserAddress(id));
  };

  return (
    <div className="grid">
      <div className=" !overflow-hidden px- ">
        {open && (
          <div className="fixed w-full h-screen bg-[#0000004b] top-0 z-50 left-0 flex items-center justify-center ">
            <div className="w-[90%] 800px:w-[70%] lg:w-[60%] h-[82vh] z-[999999] pt-6 px-10 lg:px-20 bg-white rounded shadow relative  800px:mt-20 ">
              <div className="w-full flex justify-end p-3">
                <RxCross1
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <h1 className="text-center text-[25px] font-Poppins">
                Add New Address
              </h1>
              <div className="w-full">
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="w-full flex flex-wrap gap-4 ">
                    {/* <div className="flex gap-3"> */}
                    <div className="w-[46%]  pb-2">
                      <label className="block pb-2"> Full name</label>
                      <input
                        name="name"
                        type="text"
                        className={`${styles.input} border-gray-400 `}
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>{" "}
                    <div className="w-[46%] pb-2">
                      <label className="block pb-2">number</label>
                      <input
                        name="number"
                        type="number"
                        className={`${styles.input}`}
                        required
                        value={zipCode}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                    {/* </div> */}
                    {/* <div className="flex gap-3"> */}{" "}
                    <div className="w-[46%] pb-2">
                      <label className="block pb-2">Zip Code</label>
                      <input
                        type="number"
                        name="zipCode"
                        className={`${styles.input}`}
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </div>
                    <div className="w-[46%] pb-2">
                      <label className="block pb-2">Address Type</label>
                      <select
                        name="addressType"
                        id=""
                        value={addressType}
                        onChange={(e) => setAddressType(e.target.value)}
                        className=" w-[100%] pl-2 border h-[37px] rounded-[5px]"
                      >
                        <option value="" className="block border pl-2 pb-2">
                          Address Type
                        </option>
                        {addressTypeData &&
                          addressTypeData.map((item) => (
                            <option
                              className="block pb-2 pl-2"
                              key={item.name}
                              value={item.name}
                            >
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    {/* </div> */}
                    {/* <div className="flex gap-3"> */}
                    <div className="w-[46%] pb-2">
                      <label className="block pb-2">division</label>
                      <select
                        name="division"
                        id=""
                        value={division}
                        onChange={(e) => setdivision(e.target.value)}
                        className="w-[100%] border h-[38px] rounded-[5px] pl-2"
                      >
                        <option value="" className="block border pb-2 ">
                          choose your division
                        </option>
                        {Division &&
                          Division.map((item, index) => {
                            return (
                              <option
                                value={index}
                                className="block pb-2"
                                key={index}
                              >
                                {item.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="w-[46%] pb-2">
                      <label className="block pb-2">Choose your district</label>
                      <select
                        name="district"
                        id=""
                        value={district}
                        onChange={(e) => setdistrict(e.target.value)}
                        className="w-[100%] border h-[40px] rounded-[5px] pl-2"
                      >
                        <option value="" className="block border pb-2">
                          choose your district
                        </option>
                        {division !== "" &&
                          Division[division].district.map((district, index) => (
                            <option key={index} value={district}>
                              {district}
                            </option>
                          ))}
                      </select>
                    </div>
                    {/* </div> */}
                    <div className="w-[95%] pb-2">
                      <label className="block pb-2">Address </label>
                      <input
                        type="address"
                        name="address"
                        className={`${styles.input} `}
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <button className="bg-red-800 text-white text-right px-12 py-2 mx-auto">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="flex w-full items-center justify-between"></div>

        <div className="bg-white w-full min-h-[400px] ">
          <div className=" flex justify-between px-10 py-5">
            <h1>My address</h1>
            <button onClick={() => setOpen(true)}>add</button>
          </div>

          <div className="flex flex-wrap w-full gap-4 lg:gap-3   pb-10">
            <div className="w-[80%] lg:w-[45%] rounded-md pl-10 border border-gray-200 p-2 mx-auto">
              <div>
                <h1 className="text-[13px] "> Md: Hasanul Haque</h1>
                <h2 className="text-[12px] pl-2"> +8801782572426</h2>
                <h3 className="text-[12px] pl-4 ">
                  15, girls school road,purbadhala
                </h3>
                <div className="flex flex-row text-[13px] pl-6">
                  <h1>
                    Netrakona <span> , </span>
                  </h1>
                  <h2> Mymenshing </h2>
                </div>
                <div className="pl-10 py-1">
                  <h4 className="py-1 text-center text-[12px] bg-[#dd25253d] px-1 w-[50px] rounded-md ">
                    home
                  </h4>
                </div>
              </div>
              <div className="text-right pr-3">delete</div>
            </div>
            <div className="w-[80%] lg:w-[45%]  rounded-md pl-10 border border-gray-200 p-2 mx-auto">
              <div>
                <h1 className="text-[13px] "> Md: Hasanul Haque</h1>
                <h2 className="text-[12px] pl-2"> +8801782572426</h2>
                <h3 className="text-[12px] pl-4 ">
                  15, girls school road,purbadhala
                </h3>
                <div className="flex flex-row text-[13px] pl-6">
                  <h1>
                    Netrakona <span> , </span>
                  </h1>
                  <h2> Mymenshing </h2>
                </div>
                <div className="pl-10 py-1">
                  <h4 className="py-1 text-[12px] bg-[#dd25253d] px-1 w-[50px] rounded-md ">
                    Default
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-[80%] rounded-md pl-10 border border-gray-200 p-2 mx-auto">
              <div>
                <h1 className="text-[13px] "> Md: Hasanul Haque</h1>
                <h2 className="text-[12px] pl-2"> +8801782572426</h2>
                <h3 className="text-[12px] pl-4 ">
                  15, girls school road,purbadhala
                </h3>
                <div className="flex flex-row text-[13px] pl-6">
                  <h1>
                    Netrakona <span> , </span>
                  </h1>
                  <h2> Mymenshing </h2>
                </div>
                <div className="pl-10 py-1">
                  <h4 className="py-1 text-[12px] bg-[#dd25253d] px-1 w-[50px] rounded-md ">
                    Default
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="overflow-x-scroll">
          {user &&
            user.addresses.map((item, index) => (
              <div
                // className="  mx-auto p-2 md:p-2 overflow-x-auto rounded-xl bg-gray-200 lg:w-full lg:aspect-square flex items-center"
                className=" w-[600px] md:w-full hide-scrollbar overflow-y-auto  bg-white h-min py-3 800px:h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10 mb-5"
                key={index}
              >
                <div className="flex items-center">
                  <h5 className="pl-5 font-[600]">{item.addressType}</h5>
                </div>
                <div className="pl-8 flex items-center">
                  <h6 className="text-[12px] 800px:text-[unset]">
                    {item.address}
                  </h6>
                </div>
                <div className="pl-8 flex items-center">
                  <h6 className="text-[12px] 800px:text-[unset]">
                    {item.number}
                  </h6>
                </div>
                <div className="min-w-[10%] flex items-center justify-between pl-8">
                  <AiOutlineDelete
                    size={25}
                    className="cursor-pointer"
                    onClick={() => handleDelete(item)}
                  />
                </div>
              </div>
            ))}
        </div>

        {user && user.addresses.length === 0 && (
          <h5 className="text-center pt-8 text-[18px]">
            You not have any saved address!
          </h5>
        )} */}
      </div>
    </div>
  );
}

export default Address;
