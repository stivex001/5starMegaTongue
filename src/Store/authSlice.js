/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { apiBaseUrl } from "./apiBaseUrl";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const userData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : {},
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: localStorage.getItem("currentUser") ? true : false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ firstname, lastname, email, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiBaseUrl}/register`, {
        firstname,
        lastname,
        email,
        password,
      });
      console.log(res?.data?.success);

      localStorage.setItem("currentUser", res?.data);
      return res?.data;
    } catch (error) {
      console.log(error.response?.data?.message);

      return rejectWithValue(error.response?.data?.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
      return { ...state, registerStatus: "pending" };
    });
  },
});

export const auth = (state) => state.auth;

export default authSlice.reducer;
