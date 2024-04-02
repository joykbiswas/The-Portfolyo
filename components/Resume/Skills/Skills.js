"use client";
import { userData } from "@/lib/BuilderApi";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    userData()
      .then((res) => setSkill(res.user.skills))
      .catch((err) => console.log(err));
  }, []);
  console.log(skill);
  return (
    <div>
        <h3 className="text-4xl font-semibold text-center pt-10 pb-8">SKills</h3>
      <div className="grid grid-cols-2 gap-7 bg-slate-50 p-5">
        
        {skill.map((skills) => (
          <div key={skills._id} className="flex flex-col  gap-4">
            <h2>{skills.name}</h2>
            
            <div
              className={`flex h-4 w-full  items-center justify-center rounded-full bg-sky-300`}
            >
              <div
                style={{ width: `${skills.percentage}%` }}
                className={`transition-width flex justify-center items-center mr-auto h-full w-0 rounded-full  bg-sky-600 duration-500`}
              >
                <span className="font-medium  text-center text-white">
                  
                  {skills.percentage} %
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
