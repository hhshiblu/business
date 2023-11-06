import { server } from "@/app/serverURL";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllShoporderAsync = createAsyncThunk(
  "order/getAllShoporder",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${server}orders/seller_all_orders/${id}`
      );
      return data.orders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getSingleorderAsync = createAsyncThunk(
  "order/getSingleorder",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`${server}order/single_order/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// export const deleteorderAsync = createAsyncThunk(
//   "order/deleteorder",
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(
//         `${server}/order/delete-shop-order/${id}`,
//         { withCredentials: true }
//       );
//       return data.message;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   }
// );

export const getAllordersAsync = createAsyncThunk(
  "order/getAllorders",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${server}orders/get_all_orders`, {
        withCredentials: true,
      });

      return data.orders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const getUserOrderAsync = createAsyncThunk(
  "order/getQueryorder",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`${server}orders/user_all_orders/${id}`);
      return data.orders;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  isloading: false,
  sellerOrder: [],
  success: false,
  userorders: [],
  message: null,
  allorders: [],
  queryUnderorder: [],
  queryshoes: [],
  queryfashion: [],
  error: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllShoporderAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getAllShoporderAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.sellerOrder = action.payload;
        state.success = true;
      })
      .addCase(getAllShoporderAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getSingleorderAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getSingleorderAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.order = action.payload.order;
        state.success = true;
      })
      .addCase(getSingleorderAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getAllordersAsync.pending, (state) => {
        state.isloading = false;
      })
      .addCase(getAllordersAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.allorders = action.payload;
      })
      .addCase(getAllordersAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteorderAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(deleteorderAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.message = action.payload;
      })
      .addCase(deleteorderAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(getUserOrderAsync.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getUserOrderAsync.fulfilled, (state, action) => {
        state.isloading = false;
        state.userorders = action.payload;
      })
      .addCase(getUserOrderAsync.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const orderActions = {
  getAllShoporderAsync,
  getUserOrderAsync,
  getSingleorderAsync,
  deleteorderAsync,
  getAllordersAsync,
};

export default orderSlice.reducer;
