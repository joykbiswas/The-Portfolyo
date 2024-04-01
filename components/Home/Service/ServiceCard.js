/* eslint-disable react/prop-types */
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
// import { FaArrowLeft } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { name, charge, desc, image} = service;
console.log(service);
  return (
    <div>
      <div className="m-4 group ">
        <div className="relative grid h-72 w-full  items-end justify-center overflow-hidden text-center rounded-2xl ">
          <div className=" absolute inset-0 m-0 h-full  w-full  group-hover:scale-110 transition  ">
            <Image src={image.url}
            width={250} height={200} className="h-full rounded-2xl" alt="service img" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full group-hover:bg-gradient-to-t from-black via-black/50" />
          </div>

         
          <div className="border absolute top-0 right-2 text-white justify-between bg-gray-200 p-1 rounded-lg mt-4">
            <h2 className="card-title text-blue-700">
              {charge}
            </h2>
          </div>
          
        </div>
        <div className="text-center space-y-4 pt-3">
          <h1 className="text-2xl font-semibold ">{name}</h1>
          <h5 className=" mb-4 text-xl">{desc}</h5>
        
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
