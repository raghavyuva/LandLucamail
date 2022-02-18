import React from "react";
import { ShotsData } from "../Static/Shots-data";

const Shots = () => {
  return (
    <section id="shots" className="pt-20  text-primary-text">
      <div className=" mx-auto max-w-7xl ">
      <h2 className="mb-4 ml-4 text-xl font-bold md:text-3xl">
          Shots Gallery
      </h2>
      </div>
        <div className="container  grid grid-cols-1 md:grid-cols-2">
          {ShotsData &&
            ShotsData?.map((ele) => (
              <div className="md:mx-4 my-2">
                <img
                  alt={ele.label}
                  className="h-56 w-full md:h-80   rounded shadow-sm  aspect-square"
                  src={ele.img}
                />
              </div>
            ))}
        </div>
    </section>
  );
};

export default Shots;
