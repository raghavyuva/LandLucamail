import React from "react";
import FeatureData from "../Static/features.json";
const Features = () => {
  return (
    <div id="features">
      <div className="bg-coolGray-100 text-primary-text">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {FeatureData.title}
            </h2>
            <p className="mt-4 text-lg text-primary-text">
              {FeatureData.description}
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            {FeatureData &&
              FeatureData?.listoffeatures?.map((ele) => (
                <div className="flex">
                  <div className="flex  justify-center w-12 h-8 rounded-md bg-primary-text text-primary-background ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <dt className="text-lg font-mono font-bold">{ele.label}</dt>
                    <dd className="mt-2 text-primary-text">
                      {ele.description}
                    </dd>
                  </div>
                </div>
              ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
