import React from "react";
import faqdata from "../Static/Faq-data.json";
const FAQ = () => {
  return (
    <section id="faq" className="py-24  text-primary-text">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <h2 className="mb-4 text-xl font-bold md:text-3xl">{faqdata?.title}</h2>
        <div className="grid grid-cols-1 gap-0  md:grid-cols-2 md:gap-16">
          {faqdata?.listofquestions?.map((ele) => (
            <div className=" ">
              <h5 className="mt-10 mb-3 font-semibold ">{ele.label}</h5>
              <p className="">{ele.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
