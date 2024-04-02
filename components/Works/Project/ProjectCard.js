/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ project }) => {
  const { liveurl, githuburl, title, image, description, techStack } = project;
  console.log(project);
  return (
    <div className="">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="mainDiv rounded-lg shadow-md overflow-hidden bg-white/50 dark:bg-my-dark-btn"
      >
        <div className="relative w-full h-36 overflow-hidden">
          <div className=" imgDiv h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 ">
            <Image
              src={image.url}
              height={100}
              width={100}
              alt="project img"
              className="object-cover object-top w-full"
            />
          </div>
        </div>
        <div className=" info p-5 relative border-t border-white/10 dark:text-gray-400">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-gray-700 dark:text-gray-400">
              {title}
            </h2>
            
          </div>
          <p className="my-3 dark:text-gray-400">
            {description.slice(0, 100)}......
          </p>
        </div>
        <div className="tech  p-5 relative border-t border-white/10">
          <p className="uppercase dark:text-gray-400">
            <span className="font-bold">Technolohy: </span>
            {techStack}
          </p>
          <div data-aos="fade-up" className="  mt-4 space-x-5 ">
            <Link href={liveurl}>
              <button className="myBtn mb-6 px-4 py-2 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Live Link
              </button>
            </Link>
            <Link href={githuburl}>
              <button className="myBtn px-4 py-2  flex items-center gap-1 text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <FaGithub className="text-3xl" /> Github Client
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
