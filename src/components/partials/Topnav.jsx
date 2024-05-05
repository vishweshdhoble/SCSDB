import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import noimage from '../../../public/noimage.jpg'

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSerches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSerches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything..."
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-3xl ri-close-fill cursor-pointer"
        ></i>
      )}
      <div className="ml-[5.5%] overflow-auto w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%]">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-start border-b-2 border-zinc-100 items-center"
          >
            <img className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg shadow-zinc-500" src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}` : noimage} alt="" />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-10 flex justify-start border-b-2 border-zinc-100 items-center">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
