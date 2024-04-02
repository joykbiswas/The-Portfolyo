"use client";
import { userData } from "@/lib/BuilderApi";
import React, { useEffect, useState } from "react";

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    userData()
      .then((res) => setEducation(res.user.timeline))
      .catch((err) => console.log(err));
  }, []);
  console.log(education);
  return (
    <div className="bg-gray-50 p-4">
        <div className="flex gap-8 ">
     <div>
        <h2 className="text-4xl font-semibold pb-5">Education</h2>
     <div>
        {education
          .filter((item) => item.forEducation) // Filter for education items
          .map((educations) => (
            <div key={educations._id}>
              <ol class="relative border-s border-blue-500 dark:border-gray-700">
                <li class="mb-10 ms-4">
                  <div class="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                  {educations.startDate.slice(0, 10)}  / {educations.endDate.slice(0, 10)}
                  </time>
                  <h3>{educations.company_name}</h3>
                  <h3>{educations.jobLocation}</h3>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {educations.jobTitle}
                  </h3>
                  <p class="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
                    {educations.bulletPoints}
                  </p>
                  
                </li>
              </ol>
            </div>
          ))}
      </div>
     </div>
     <div>
        <h2 className="text-4xl font-semibold pb-5">Experience</h2>
     
        {education
          .filter((item) => !item.forEducation) // Filter for experience items
          .map((experience) => (
            <div key={experience}>
              <ol class="relative border-s border-blue-500 dark:border-gray-700">
                <li class="mb-10 ms-4 ">
                  <div class="absolute w-3 h-3 bg-blue-700 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time class="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                  {experience.startDate.slice(0, 10)}  /  {experience.endDate.slice(0, 10)}
                  </time>
                  <h3>{experience.company_name}</h3>
                  <h3>{experience.jobLocation}</h3>
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    {experience.jobTitle}
                  </h3>
                  <p class="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
                    {experience.bulletPoints}
                  </p>

                </li>
              </ol>
            </div>
          ))}
      
     </div>
    </div>
    </div>
  );
};

export default Education;
