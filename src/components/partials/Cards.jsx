import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const Cards = ({ data, title }) => {
  return (
    <div className="justify-center pl-[9%] pt-[3%] flex flex-wrap w-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link className="relative w-[25vh] mr-[5%] mb-[5%]" key={i}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
            src={c.poster_path || c.backdrop_path || c.profile_path? `https://image.tmdb.org/t/p/original/${
              c.poster_path || c.backdrop_path || c.profile_path
            }`:noimage}
            alt=""
          />
          <h1 className="text-2xl text-zinc-200 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
          {c.vote_average && <div className="absolute right-[-12%] bottom-[25%] text-white text-xl font-semibold w-[6vh] h-[6vh] flex justify-center items-center bg-yellow-600 rounded-full">
            {(c.vote_average * 10).toFixed()}
            <sup>%</sup>
          </div>}
          
        </Link>
      ))}
    </div>
  );
};

export default Cards;
