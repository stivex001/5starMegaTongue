/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { apiBaseUrl } from "./apiBaseUrl";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import instance from "./axios";

const userData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: localStorage.getItem("user") ? true : false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ firstname, lastname, email, password }, { rejectWithValue }) => {
    try {
      const res = await instance.post(`${apiBaseUrl}/register`, {
        firstname,
        lastname,
        email,
        password,
      });
      console.log(res?.data?.success);

      localStorage.setItem("user", res?.data);
      return res?.data;
    } catch (error) {
      console.log(error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await instance.post(`${apiBaseUrl}/login`, {
        email,
        password,
      });

      localStorage.setItem("user", res?.data);

      return res?.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOutUser(state, action) {
      localStorage.removeItem("user");
      return {
        ...state,
        user: {},
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
        userLoaded: false,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      Swal.fire({
        text: "Please wait...while your request is being process",
        icon: "info",
        allowOutsideClick: false,
      });
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { status, message } = action.payload;
      if (status) {
        toast(message);
        window.location.replace("/login");
        return {
          ...state,
          registerStatus: "success",
        };
      } else {
        toast.error(message);
        return {
          ...state,
          registerStatus: "failed",
          registerError: message,
        };
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      toast.error(action?.payload);
      return { ...state, registerStatus: "rejected" };
    });

    // login user
    builder.addCase(loginUser.pending, (state, action) => {
      return {
        ...state,
        loginStatus: "pending",
      };
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { data, status, message } = action.payload;
      if (status) {
        toast("Aulthentication successfull");
        localStorage.setItem("user", JSON.stringify(data));
        window.location.replace("/");
        return {
          ...state,
          user: data,
          loginStatus: "success",
        };
      } else {
        toast.error(message);
        return {
          ...state,
          loginStatus: "failed",
          loginError: message,
        };
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      toast.error(action?.payload);
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { LogOutUser } = authSlice.actions;
export default authSlice;
