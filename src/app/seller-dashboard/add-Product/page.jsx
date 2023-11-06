"use client";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { productCreateAsync } from "@/redux/reducer/productSlice";

const colorsData = ["Red", "White", "Green", "blue", "yellow"];
const sizesData = ["22", "23", "29", "42", "s", "m", "l", "xl", "xxl"];

function CreateProduct() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  // const { seller } = useSelector((state) => state.seller);
  const { success, error } = useSelector((state) => state.product);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleColorChange = (e, color) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedColors((prevColors) => [...prevColors, color]);
    } else {
      setSelectedColors((prevColors) => prevColors.filter((c) => c !== color));
    }
  };

  const handleSizeChange = (e, size) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedSizes((prevSizes) => [...prevSizes, size]);
    } else {
      setSelectedSizes((prevSizes) => prevSizes.filter((s) => s !== size));
    }
  };

  const [images, setImages] = useState([]);

  const [product, setProduct] = useState({
    ProductName: "",
    description: "",
    tags: "",
    originalPrice: "",
    discountPrice: "",
    stock: "",
  });

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // const HandelSubmit = (e) => {
  //   e.preventDefault();

  //   const newForm = new FormData();

  //   images.forEach((image) => {
  //     newForm.append("images", image);
  //   });

  //   newForm.append("name", product.ProductName);
  //   newForm.append("description", product.description);
  //   newForm.append("category", category);
  //   newForm.append("subCategory", subCategory);
  //   newForm.append("tags", product.tags);
  //   newForm.append("originalPrice", product.originalPrice);
  //   newForm.append("discountPrice", product.discountPrice);
  //   newForm.append("stock", product.stock);

  //   // Add selected colors and sizes to the form data
  //   selectedColors.forEach((color) => {
  //     newForm.append("color[]", color);
  //   });

  //   selectedSizes.forEach((size) => {
  //     newForm.append("size[]", size);
  //   });

  //   newForm.append("sellerId", "6461e1231d468f007eb5d6d9");

  //   dispatch(productCreateAsync(newForm));
  // };
  const HandelSubmit = (e) => {
    e.preventDefault();
    const sellerId = "6461e1231d468f007eb5d6d9";
    const newForm = new FormData();

    images.forEach((image) => {
      newForm.append("images", image);
    });

    newForm.append("name", product.ProductName);
    newForm.append("description", product.description);
    newForm.append("category", category);
    newForm.append("subCategory", subCategory);
    newForm.append("tags", product.tags);
    newForm.append("originalPrice", product.originalPrice);
    newForm.append("discountPrice", product.discountPrice);
    newForm.append("stock", product.stock);

    // Add selected colors and sizes to the form data
    selectedColors.forEach((color) => {
      newForm.append("color[]", color);
    });

    selectedSizes.forEach((size) => {
      newForm.append("size[]", size);
    });

    // Pass the seller ID as a single value
    newForm.append("sellerId", sellerId);

    dispatch(productCreateAsync(newForm));
  };

  return (
    <div className="w-[100%] 800px:w-[84%] bg-white  m-auto shadow h-[91vh] rounded-[4px] p-4 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
      {/* create product form */}
      <form onSubmit={HandelSubmit}>
        <hr />
        <br />

        <div>
          <label className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="ProductName"
            value={product.ProductName}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handelChange}
            placeholder="Enter your product name..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            cols="30"
            required
            rows="8"
            type="text"
            name="description"
            value={product.description}
            className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handelChange}
            placeholder="Enter your product description..."
          ></textarea>
        </div>
        <br />
        <div className=" flex gap-6">
          <div className="w-[45%]">
            <label className="pb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px] pl-2"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Choose a category">Choose a category</option>
              {categories &&
                categories.map((i) => (
                  <option value={i.name} key={i.name}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="w-[45%]">
            <label className="pb-2">
              Subcategory <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full mt-2 border h-[35px] rounded-[5px]"
              name="subcategory"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              <option value="Choose a subcategory">Choose a subcategory</option>
              {categories &&
                categories
                  .find((cat) => cat.name === category)
                  ?.children.map((i, index) => (
                    <option key={index} value={i.name}>
                      {i.name}
                    </option>
                  ))}
            </select>
          </div>
        </div>

        <br />
        <div>
          <label className="pb-2">Tags</label>
          <input
            type="text"
            name="tags"
            value={product.tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handelChange}
            placeholder="Enter your product tags..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">Colors : </label>
          {colorsData.map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                name="colors"
                value={color}
                className="pl-2 text-red-900 "
                checked={selectedColors.includes(color)}
                onChange={(e) => handleColorChange(e, color)}
              />
              <span className="px-1">{color}</span>
            </label>
          ))}
        </div>
        <br />

        {/* Size checkboxes */}
        <div className="">
          <label className="pb-2 ">Sizes : </label>
          {sizesData.map((size) => (
            <label key={size} className="pl-2">
              <input
                type="checkbox"
                name="sizes"
                value={size}
                checked={selectedSizes.includes(size)}
                onChange={(e) => handleSizeChange(e, size)}
              />
              <span className="px-1">{size}</span>
            </label>
          ))}
        </div>
        <br />
        <div>
          <label className="pb-2">Original Price</label>
          <input
            type="number"
            name="originalPrice"
            value={product.originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handelChange}
            placeholder="Enter your product price..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Price (With Discount) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="discountPrice"
            value={product.discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handelChange}
            placeholder="Enter your product price with discount..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onChange={handelChange}
            placeholder="Enter your product stock..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <Image
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] object-cover m-2 mt-4 rounded-sm"
                />
              ))}
          </div>
          <br />
          <div>
            <input
              type="submit"
              value="Create"
              className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
