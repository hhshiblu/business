import { server } from "@/app/serverURL";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const productCreateAsync = createAsyncThunk(
  "product/createProduct",
  async (newForm, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.post(
        `${server}/product/create-product`,
        newForm,
        config
      );
      return data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllShopProductAsync = createAsyncThunk(
  "product/getAllShopProduct",
  async (id, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.get(`${server}/product/get-all-products-shop/${id}`);
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
      const { data } = await axios.delete(`${server}/product/delete-shop-product/${id}`, { withCredentials: true });
      return data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAllProductsAsync = createAsyncThunk(
  "product/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${server}product/allproduct`);
      console.log(data);
      return data.products;
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
  isloading: true,
  product: null,
  success: false,
  products: [],
  message: null,
    allProducts: [],
  queryUnderProduct:[],
  queryshoes:[],
  queryfashion:[],
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
        state.product = action.payload;
        state.success = true;
      })
      .addCase(productCreateAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getAllShopProductAsync.fulfilled, (state, action) => {
        state.isloading = false;
        // state.products = action.payload;
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
        state.message = action.payload;
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
        state.products = action.payload;
        console.log(action.payload);
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
  deleteProductAsync,
    getAllProductsAsync,
  getQueryProductAsync
};

export default productSlice.reducer;