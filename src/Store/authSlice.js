/* eslint-disable no-unused-vars */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { apiBaseUrl } from "./apiBaseUrl";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

const initialState = {
  currentUser: localStorage.getItem("currentUser"),
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (UserData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiBaseUrl}/register`, UserData);
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
      if (typeof action.payload === "string") {
        toast.error(action.payload);
      } else {
        // Handle the case where the message is not a string
      }
      return { ...state, registerStatus: "pending" };
    });
  },
});

export const auth = (state) => state.auth;

export default authSlice.reducer;
