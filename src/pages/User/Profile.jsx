// import React from 'react'

import CustomButton from "../../utils/CustomButton";

const Profile = () => {
  return (
    <div className="pt-32">
      <div className="flex flex-col mx-auto w-5/6  md:h-full md:pb-0 gap-[77px]">
        <h1 className="text-3xl font-medium">Profile</h1>
        <form action="" className="flex flex-col gap-6  ">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-20">
            <div className="flex flex-col gap-3 flex-1">
              <label className="text-dark-blue text-xl">First Name</label>
              <input
                type="text"
                placeholder="john"
                className="border border-gray-400 py-4 px-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <label className="text-dark-blue text-xl">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="border border-gray-400 py-4 px-4 rounded-md"
              />
            </div>
          </div>
          {/* email */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              className="border border-gray-400 py-4 px-4 rounded-md"
            />
          </div>
          {/* Address */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">Address</label>
            <input
              type="text"
              placeholder="kubwa"
              className="border border-gray-400 py-4 px-4 rounded-md"
            />
          </div>
          {/* Contact */}
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">Contact</label>
            <input
              type="text"
              placeholder="+2348162174754"
              className="border border-gray-400 py-4 px-4 rounded-md"
            />
          </div>
          {/* city */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-20">
            <div className="flex flex-col gap-3 flex-1">
              <label className="text-dark-blue text-xl">City</label>
              <input
                type="select"
                placeholder="Kubwa"
                className="border border-gray-400 py-4 px-4 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <label className="text-dark-blue text-xl">State</label>
              <input
                type="select"
                placeholder="Abuja"
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
              defaultValue="enabled" // Set the default selected option
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
              defaultValue="enabled" // Set the default selected option
            >
              <option value="disabled">Disabled</option>
              <option value="enabled">Enabled</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <label className="text-dark-blue text-xl">Password</label>
            <input
              type="password"
              className="border border-gray-400 py-4 px-4 rounded-md"
            />
          </div>
          <CustomButton className="w-fit bg-bg-purple">Save</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Profile;
