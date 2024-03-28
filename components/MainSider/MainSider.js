"use client"
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWeebly,
  FaLinkedinIn,
  FaPhone,
  FaMobile,
  FaSearchLocation,
  FaMailchimp,
  FaMailBulk,
  FaEnvelopeOpenText,
  FaDownload,
  FaInstagram,
} from "react-icons/fa";
import person from "../../assets/abdullah.png";
import Image from "next/image";
import { userData } from "@/lib/BuilderApi";

const MainSidear = () => {
  const [users, SetUsers] = useState(null);
  useEffect(() => {
    userData()
      .then((res) => SetUsers(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);
  return (
    <div className="flex sticky top-0 justify-between flex-col items-center space-y-3 py-24 ">
      <div className="rounded-md z-10   -mb-40">
      {users && (
              <Image
              data-aos="fade-down"
                src={users?.user.about.avatar.url} // Assuming user data has avatar information
                width={100}
                height={100}
                className="rounded-lg w-40"
                alt={users?.user.about.name} // Assuming user data has name information
              />
            )}
      </div>
      <div className="text-center  bg-white dark:bg-my-dark dark:text-white p-6 rounded-xl ">
        <h1
          data-aos="zoom-in-up"
          className="text-2xl mt-36 text-gray-800 font-bold dark:text-white dark:mb-2"
        >
         {users?.user?.about.name}
        </h1>
        <div
          data-aos="zoom-in-up"
          className="dark:bg-my-dark-btn rounded-md w-fit mx-auto px-8 py-2 "
        >
          <h3 className="text-xl dark:text-my-dark-txt ">
          {users?.user?.about.title}
          </h3>
        </div>
        {/* social media link */}
        <div
          data-aos="zoom-in-down"
          className="flex  justify-center gap-3 mt-4"
        >
          <a
            href="https://www.facebook.com/mdabdullahbinziad"
            className="p-3  text-blue-700 hover:text-white bg-my-gray dark:bg-my-dark-btn rounded-md hover:bg-btn-grad"
          >
            <FaFacebookF className="" />
          </a>
          <a
            href="https://www.instagram.com/abdullahbinziad/"
            className="p-3  text-blue-700 hover:text-white bg-my-gray dark:bg-my-dark-btn rounded-md hover:bg-btn-grad"
          >
            <FaInstagram className="" />
          </a>
          <a
            href="https://abdullahbinziad.com/"
            className="p-3  text-red-700 hover:text-white bg-my-gray dark:bg-my-dark-btn rounded-md hover:bg-btn-grad"
          >
            <FaWeebly className="" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullahbinziad/"
            className="p-3  text-blue-700 hover:text-white bg-my-gray dark:bg-my-dark-btn rounded-md hover:bg-btn-grad"
          >
            <FaLinkedinIn className=" " />
          </a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-blue-100 dark:bg-my-dark-btn p-3 my-6  rounded-lg"
        >
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white dark:bg-my-dark rounded-md shadow-md  text-purple-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaMobile className="" />
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-sm text-my-dark-txt">Phone</h4>
              <h2 className="text-lg">{users?.user?.about.phoneNumber}</h2>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white dark:bg-my-dark rounded-md shadow-md  text-yellow-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaSearchLocation className="" />
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-sm text-my-dark-txt">Location</h4>
              <h2 className="text-lg">{users?.user?.about.address}</h2>
            </div>
          </div>
          <hr className="w-full" />
          <div className="flex gap-4 items-center p-3">
            <div className="bg-white dark:bg-my-dark rounded-md shadow-md  text-red-700  hover:text-white flex hover:bg-btn-grad p-3">
              <span className="">
                <FaEnvelopeOpenText className="" />
              </span>
            </div>
            <div className="text-left">
              <h4 className="text-sm text-my-dark-txt">Email</h4>
              <h2 className="text-lg">{users?.user?.about.contactEmail}</h2>
            </div>
          </div>

          <hr className="w-full" />
        </div>
        <a href="">
          <button
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className=" w-3/4 mx-auto bg-btn-grad flex gap-3 px-6 py-3 justify-center items-center text-center rounded-2xl"
          >
            <FaDownload /> Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default MainSidear;
