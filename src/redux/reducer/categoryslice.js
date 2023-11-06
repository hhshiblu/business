import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const server = "http://localhost:3000/api/";

// Your buildNewCategories function
const buildNewCategories = (parentId, categories, category) => {

  return categories.map((cate) => {
    if (cate._id === parentId) {
      return {
        ...cate,
        children: [
          ...(cate.children || []),
          {
            id: category.id,
            name: category.name,
            slug: category.slug,
            parentId: category.parentId,
            children: category.children || [],
          },
        ],
      };
    } else {
      return {
        ...cate,
        children: cate.children
          ? buildNewCategories(parentId, cate.children, category)
          : [],
      };
    }
  });
};

// Async Thunks
export const getAllCategoryAsync = createAsyncThunk(
  "category/getAllCategory",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${server}category/get-category`);
      return data.categoryList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addCategoryAsync = createAsyncThunk(
  "category/addCategory",
  async (form, thunkAPI) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${server}/category/create`,
        form,
        config
      );
      return data.category;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateCategoriesAsync = createAsyncThunk(
  "category/updateCategories",
  async (formData, thunkAPI) => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${server}/category/update`,
        formData,
        config
      );

      if (data.status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data.error);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteCategoriesAsync = createAsyncThunk(
  "category/deleteCategories",
  async (ids, thunkAPI) => {
    try {
      const { data } = await axios.post(`${server}/category/delete`, { ids });

      if (data.status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data.error);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Redux Toolkit Slice
const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategoryAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategoryAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
     

      })
      .addCase(getAllCategoryAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCategoryAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCategoryAsync.fulfilled, (state) => {
        state.isLoading = false;
        // Handle the success case as needed
      })
      .addCase(addCategoryAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateCategoriesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategoriesAsync.fulfilled, (state) => {
        state.isLoading = false;
        // Handle the success case as needed
      })
      .addCase(updateCategoriesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCategoriesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategoriesAsync.fulfilled, (state) => {
        state.isLoading = false;
        // Handle the success case as needed
      })
      .addCase(deleteCategoriesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});


export default categorySlice.reducer;
export const categoryActions = {
  getAllCategoryAsync,
  addCategoryAsync,
  updateCategoriesAsync,
  deleteCategoriesAsync,
};
