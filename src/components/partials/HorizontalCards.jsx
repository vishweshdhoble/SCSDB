import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from "/noimage.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden">
      {data.length>0 ? data.map((d, i) => (
        <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[15%] bg-zinc-900 mr-5 mb-5">
          <img
            className="w-full h-[50%] object-cover"
            src={
              d.backdrop_path || d.poster_path
                ? `https://image.tmdb.org/t/p/original/${
                  d.backdrop_path || d.poster_path
                  }`
                : noimage
            }
          ></img>

          <div className="text-white h-[50%] p-3 flex flex-col">
            <h1 className="mb-2 text-lg tracking-tight leading-none font-semibold ">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="mb-3 text-xs mt-auto line-clamp-2 overflow-ellipsis">
              {d.overview.slice(0, 50)}...
              <span className="text-zinc-300"> more</span>
            </p>
          </div>
        </Link>
      )):<h1 className="text-3xl text-white font-black text-center mt-5">No Recommendations found</h1>}
    </div>
  );
};

export default HorizontalCards;
