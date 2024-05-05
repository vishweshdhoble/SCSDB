import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {


  return (
    <>
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
        <h1 className="text-2xl text-white flex">
          <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          <span className="uppercase font-bold">Flixo.</span>
        </h1>

        <nav className="mb-6 flex flex-col gap-3 text-zinc-400 text-xl">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            New Feeds
          </h1>
          <Link className="hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg p-5">
            <i className="mr-2 ri-fire-fill"></i>Trending
          </Link>
          <Link className="hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg p-5">
            <i className="mr-2 ri-bard-fill"></i>
            Popular
          </Link>
          <Link className="hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg p-5">
            <i className="mr-2 ri-movie-fill"></i>
            Movies
          </Link>
          <Link className="hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg p-5">
            <i className="mr-2 ri-tv-2-fill"></i>
            TV Shows
          </Link>
          <Link className="hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg p-5">
            <i className="mr-2 ri-team-fill"></i>
            People
          </Link>
        </nav>
        <hr className="border-none h-[1px] bg-zinc-400" />
        <nav className="flex flex-col gap-3 text-zinc-400 text-xl">
          <h1 className="text-white font-semibold text-xl mt-10 mb-5">
            Website Information
          </h1>
          <Link className="hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg p-5">
            <i className="ri-information-fill mr-2"></i>
            About
          </Link>
          <Link className="hover:bg-[#6556CD] duration-300 hover:text-white rounded-lg p-5">
            {" "}
            <i className="mr-2 ri-phone-fill"></i>Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
