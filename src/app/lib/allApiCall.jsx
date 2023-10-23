 

// get category
const axios = require("axios");
const serverUrl = "http://localhost:3000/api";
  

// get category 

const getCategory = async () => {
  const res = await axios.get(
    `${serverUrl}/category/get-category`
  );
  return res.data.categoryList;
};



// get users

//get sellers

// get products
const getProduct = async () => {
  const res = await axios.get(
    `${serverUrl}/product/allproduct`
  );
  return res.data.products;
};

export { getCategory, getProduct };
