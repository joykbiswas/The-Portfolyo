"use client";
import ContactLottie from "@/components/Contact/ContactLottie";
import { userData } from "@/lib/BuilderApi";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaPhoneVolume } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
const Contacts = () => {
  const [users, SetUsers] = useState(null);
  useEffect(() => {
    userData()
      .then((res) => SetUsers(res))
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name?.value;
    const number = form.number?.value;
    const email = form.email?.value;
    const message = form.message?.value;

    const contact = { name, number, email, message };

    if (contact) {
      Swal.fire({
        title: "success!",
        text: "Your message successfully send",
        icon: "success",
        confirmButtonText: "Conform",
      });
    }
  };
  return (
    <div id="contact" className=" bg-slate-100 p-4">
      <h1 className="text-2xl md:text-5xl font-bold text-center py-14">
        Contact Me
      </h1>
      <div className=" md:flex gap-16 max-w-7xl mx-auto">
        <div className="flex-1">
          <h3 className="text-3xl font-bold ">Let is get in touch</h3>
          <div className="">
            <ContactLottie></ContactLottie>
          </div>
          <div className="text-2xl">
            <h2 className="text-lg flex items-center gap-2 hover:text-blue-600">
              <FaHome className="text-2xl" /> {users?.user?.about.address}
            </h2>

            <h2 className="text-lg flex items-center gap-2 py-3 hover:text-blue-600">
              <FaPhoneVolume className="text-2xl" />{" "}
              {users?.user?.about.phoneNumber}
            </h2>
            <h2 className="text-lg flex items-center gap-2 hover:text-blue-600">
              <TfiEmail className="text-2xl" />{" "}
              {users?.user?.about.contactEmail}
            </h2>
          </div>
        </div>
        {/* form section */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=" border-b-2 border-sky-500 p-3 focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Number</span>
              </label>
              <input
                type="text"
                name="number"
                placeholder="+8801..."
                className=" border-b-2 border-sky-500 p-3 focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className=" border-b-2 border-sky-500 p-3 focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>

              <textarea
                type="message"
                name="message"
                className="textarea border-b-2 border-sky-500 p-3 focus:outline-none"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-control">
            <button className="group relative flex w-44 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-700"><span>Send Message</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
