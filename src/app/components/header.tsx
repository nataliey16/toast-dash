import React from "react";

const SECTION_STYLES =
  "mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] poppins";
const HEADER_STYLES = "flex flex-col items-center justify-center";
const TITLE_STYLES =
  "mb-10 mt-52 px-3 text-3xl font-bold !leading-[1.5] sm:text-7xl  text-white ";
const SUBTITLE_STYLES =
  " px-4 text-small font-medium !leading-[1.5] sm:text-xl  ";

const BUTTON_STYLES = " bg-dark-orange text-white rounded-full p-3 m-5";

const Header = () => {
  return (
    <section className={SECTION_STYLES}>
      <div className={HEADER_STYLES}>
        <div>
          <h1 className={TITLE_STYLES}>Meaningful Connections, Your Way.</h1>
        </div>
        <div>
          <p className={SUBTITLE_STYLES}>
            Discover a low-pressure platform designed for introverted women to
            build genuine relationships through guided activities, shared
            interests, and a welcoming community.
          </p>
        </div>
        <div className="mt-10">
          <h3>Join a Community That Feels Right for You.</h3>
          <button className={BUTTON_STYLES}>Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
