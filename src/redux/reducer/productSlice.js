import { server } from "@/app/serverURL";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productCreateAsync = createAsyncThunk(
  "product/createProduct",
  async (newForm, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.post(
        `${server}product/single_product`,
        newForm,
        config
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllShopProductAsync = createAsyncThunk(
  "product/getAllShopProduct",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${server}product/seller_products/${id}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getSingleProductAsync = createAsyncThunk(
  "product/getSingleProduct",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`${server}product/single_product/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.delete(
        `${server}product/single_product`,
        id,
        config,
        { withCredentials: true }
      );
      return data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllProductsAsync = createAsyncThunk(
  "product/getAllProducts",
  async (query, thunkAPI) => {
    try {
      const queryParams = new URLSearchParams({
        category: query.category,
        subCategory: query.subCategory,
        rating: query.rating,
        pageNumber: query.pageNumber,
        searchValue: query.searchValue || "",
      });
      if (query.maxPrice) {
        queryParams.set("maxPrice", query.maxPrice);
      }
      const url = `${server}product/allproduct?${queryParams}`;
      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getQueryProductAsync = createAsyncThunk(
  "product/getQueryProduct",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${server}product/query_product`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  isloading: false,
  product: null,
  sellerProduct: [],
  success: false,
  products: [],
  message: null,
  allProducts: [],
  queryUnderProduct: [],
  queryshoes: [],
  queryfashion: [],
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productCreateAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(productCreateAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.message = action.payload.message;
        state.success = true;
      })
      .addCase(productCreateAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getSingleProductAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getSingleProductAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.product = action.payload.product;
        state.success = true;
      })
      .addCase(getSingleProductAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getAllShopProductAsync.pending, (state) => {
        state.isloading = true;
      })

      .addCase(getAllShopProductAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.success = "helooo";
        state.sellerProduct = action.payload.sellerProducts;
      })
      .addCase(getAllShopProductAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteProductAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.message = action.payload.message;
      })
      .addCase(deleteProductAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(getAllProductsAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.products = action.payload.result;
      })
      .addCase(getAllProductsAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(getQueryProductAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getQueryProductAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.queryUnderProduct = action.payload.underProducts;
      })
      .addCase(getQueryProductAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const productActions = {
  productCreateAsync,
  getAllShopProductAsync,
  getSingleProductAsync,
  deleteProductAsync,
  getAllProductsAsync,
  getQueryProductAsync,
};

export default productSlice.reducer;
