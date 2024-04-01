"use client";
import { userData } from "@/lib/BuilderApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./styles.css";
import Typewriter from "react-ts-typewriter";
const Banner = () => {
  const [users, SetUsers] = useState(null);
  useEffect(() => {
    userData()
      .then((res) => SetUsers(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);
  return (
    <div>
      <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
        <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
          <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
            <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">
              {users?.user?.about.name}
            </h1>
            <p className="md:text-2xl text-lg sm:text-base text-gray-600">
              {users?.user?.about.title}
            </p>

            <div className="App  mt-28 lg:text-3xl md:text-xl text-sm text-gray-600">
              <Typewriter
                speed={100}
                text={[
                  "I develop 3D visuals",
                  "user interfaces and web applications",
                ]}
                loop={true}
              />
              <br />
            </div>

            <p className="lg:text-lg sm:text-base text-sm text-gray-600">
              {users?.user?.about.description}
            </p>
          </div>
          <div className="relative">
            {users && (
              <Image
                src={users?.user.about.avatar.url} // Assuming user data has avatar information
                width={300}
                height={400}
                className="relative md:h-[600px] sm:h-[500px] h-[300px] w-[500px] bg-gray-400 rounded-b-full object-cover"
                alt={users?.user.about.name} // Assuming user data has name information
              />
            )}
            <Image
            src="https://i.ibb.co/Q6L8V6D/5-years-removebg-preview.png"
            width={200}
            height={200}
            className="absolute -bottom-2 -left-28"
            alt="experience img"
            ></Image>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
