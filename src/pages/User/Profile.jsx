// import React from 'react'

import { useState } from "react";
import CustomButton from "../../utils/CustomButton";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.data?.access_token;
  const userData = user?.data?.user;

  const [formData, setFormData] = useState({
    firstname: userData?.firstname || "",
    lastname: userData?.lastname || "",
    website: userData?.website || "",
    address: userData?.address || "",
    phone: userData?.phone || "",
    city: userData?.city || "",
    state: userData?.state || "",
    notification: "enabled",
    recieve_invoice: "enabled",
    company: userData?.company || "",
  });
  const [loading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.notification === "enabled") {
      formData.notification = 1;
    }
    if (formData.recieve_invoice === "enabled") {
      formData.recieve_invoice = 1;
    }

    try {
      const response = await axios.post(
        `http://newmegatongueapi.staging.5starcompany.com.ng/api/updateuserinfo`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response?.data?.status === true) {
        toast.success(response?.data?.message);
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32">
      <div className="flex flex-col mx-auto w-5/6  md:h-full md:pb-0 gap-[77px]">
        <h1 className="text-3xl font-medium">Profile</h1>
        <form className="flex flex-col gap-6  ">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-20">
            <div className="flex flex-col gap-3 flex-1">
              <label className="text-dark-blue text-xl">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="border border-gray-400 py-4 px-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <label className="text-dark-blue text-xl">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="border border-gray-400 py-4 px-4 rounded-md"
              />
            </div>
          </div>
          {/* email */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="border border-gray-400 py-4 px-4 rounded-md"
            />
          </div>
          {/* Address */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-400 py-4 px-4 rounded-md"
            />
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">Contact</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-400 py-4 px-4 rounded-md"
            />
          </div>
          {/* city */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-20">
            <div className="flex flex-col gap-3 flex-1">
              <label className="text-dark-blue text-xl">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-gray-400 py-4 px-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <label className="text-dark-blue text-xl">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="border border-gray-400 py-4 px-4 rounded-md"
              />
            </div>
          </div>
          {/* Notification */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">
              Service Notifications
            </label>
            <select
              className="border border-gray-400 py-4 px-4 rounded-md"
              defaultValue="enabled"
              name="notification"
              value={formData.notification}
              onChange={handleChange} // Set the default selected option
            >
              <option value="disabled">
                Disabled (You will not receive important API service
                notifications)
              </option>
              <option value="enabled">Enabled (recommended)</option>
            </select>
          </div>
          {/* Notification Mail */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">
              Receive Email Invoices
            </label>
            <select
              className="border border-gray-400 py-4 px-4 rounded-md"
              defaultValue="enabled"
              name="recieve_invoice"
              value={formData.recieve_invoice}
              onChange={handleChange} // Set the default selected option
            >
              <option value="disabled">Disabled</option>
              <option value="enabled">Enabled</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-400 py-4 px-4 rounded-md"
            />
          </div>
          <CustomButton onClick={handleSubmit} className="w-fit bg-bg-purple">
            {loading ? "Updating..." : "Save"}
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Profile;
