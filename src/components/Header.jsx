import React from "react";
import AppSS from "../Static/lucahome.png";
const Header = () => {
  return (
    <div id="about">
      <aside class="relative overflow-hidden text-primary-text  rounded-xl lg:flex shadow-lg">
        <div class="w-full p-12 text-center lg:w-1/2 sm:p-16 lg:p-24 lg:text-left">
          <div class="max-w-xl mx-auto lg:ml-0">
            <p class="mt-2 text-2xl font-bold text-primary-text sm:text-3xl mb-2">
              The New Standard in Email Client
            </p>
            <p class=" lg:mt-4 lg:block">
              LucaMail is an Open Source,Cross Platform Email Client. LucaMail
              is developed to provide cross platform alternative to Email
              Clients that are really exists. LucaMail focuses on modern
              Technologies as well as maintaining a user friendly UI's.LucaMail
              is Leightweight, simple , os friendly too.
            </p>
            <a
              href="https://www.youtube.com/watch?v=Nr4P234WgV0"
              class="inline-block px-5 py-3 mt-8 text-sm font-medium text-primary-text   bg-gradient-to-tl from-primary-background to-primary rounded-tl-2xl rounded-br-2xl  shadow-lg  hover:bg-primary"
            >
              Watch Demo
            </a>
            <a
              href="https://github.com/raghavyuva/LucaMail/releases"
              class="inline-block px-5 ml-3 py-3 mt-8 text-sm font-medium text-primary-text   bg-gradient-to-tl from-primary-background to-primary rounded-tl-2xl rounded-br-2xl  shadow-lg  hover:bg-primary"
            >
              Download Now
            </a>
          </div>
        </div>
        <div class="relative w-full h-full  lg:w-1/2 lg:h-auto">
          <img
            src={AppSS}
            alt="Raghav Yuva"
            class=" inset-0 object-contain w-full h-full"
          />
        </div>
      </aside>
    </div>
  );
};

export default Header;
