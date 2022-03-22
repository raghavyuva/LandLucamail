import React from "react";
import EmailPromote from "../Static/Email.png";
import SentPromote from "../Static/Sent.png";

const Content = () => {
  return (
    <div id="content">
      <section className="w-full  pt-7 pb-7 md:pt-20 md:pb-24 text-primary-text">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0  border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img
              src={EmailPromote}
              className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "
            />
          </div>
          <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0  lg:text-3xl md:text-2xl">
              Instant Actions
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-primary-text border-0  sm:pr-12 xl:pr-32 lg:text-lg">
              LucaMail provides instant actions for various handlers relative
              for email client they are
            </p>
            <ul className="p-0 m-0 leading-6 border-0 ">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>
                Quick Flag add
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>
                Fast Move to bin
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>
                Structured Folders Display
              </li>
            </ul>
          </div>
        </div>
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0  border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
          <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0  lg:text-3xl md:text-2xl">
              Upcoming Features
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-primary-text border-0  sm:pr-10 lg:text-lg">
              It is a beta release  of LucaMail it expects to add new Features in the future
            </p>
            <ul className="p-0 m-0 leading-6 border-0 ">
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>
                Support for Add-Ons
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>
                Support for pop3 protocol
              </li>
              <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                  <span className="text-sm font-bold">✓</span>
                </span>
                Support for Numerous Settings
              </li>
            </ul>
          </div>
          <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img
              src={SentPromote}
              className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
