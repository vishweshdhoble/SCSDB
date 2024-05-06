import React, { useEffect, useState } from "react";
import Sidenav from "./partials/sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

const Home = () => {
  document.title = "Flixo | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCatergory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      let randomdata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomdata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleSetCategoryFilter = (value) => {
    setCatergory(value);
  };

  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <div className="w-full p-10 ">
          <div className="mb-6 flex justify-between">
            <h1 className=" text-3xl font-semibold uppercase text-zinc-400">
              Trending
            </h1>

            <Dropdown
              title="Filter"
              options={["tv", "movie", "all"]}
              handleSetCategoryFilter={(e)=>setCatergory(e.tar)}
            />
          </div>
          <HorizontalCards data={trending} />
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
