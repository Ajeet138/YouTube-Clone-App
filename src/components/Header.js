import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onToggleSideBar } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheSearchSuggestions } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const toogleSideBar = () => {
    dispatch(onToggleSideBar());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const suggestions = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const data = await suggestions.json();
    setSearchSuggestion(data[1]);
    dispatch(
      cacheSearchSuggestions({
        [searchQuery]: data[1],
      })
    );
  };

  return (
    <div className="w-full shadow-2xl grid grid-cols-12 px-4 ">
      <div className="flex py-4 px-4 col-span-2">
        <div className="cursor-pointer" onClick={() => toogleSideBar()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <img
          className="h-10 px-4"
          alt="logo"
          src="https://e7.pngegg.com/pngimages/538/176/png-clipart-youtube-logo-video-youtube-text-trademark.png"
        />
      </div>

      <div className="col-span-9">
        <form className="w-full flex justify-center pt-4 ">
          <input
            type="text"
            placeholder="Search"
            className=" border border-black w-2/4  py-1 rounded-lg px-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <div className="border border-gray-400 py-2 px-2 bg-slate-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </form>
        {showSuggestion && (
          <div className="w-[37%] bg-white py-2 shadow-lg rounded-lg  border border-gray-200  ml-64 absolute">
            <ul>
              {searchSuggestion.map((data) => (
                <li
                  key={data}
                  className="py-1 px-4 shadow-sm hover:bg-gray-100 hover:rounded-lg "
                >
                  {data}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 py-4 my-auto">
        <div className="flex border border-gray-300 rounded-full px-4 py-1 text-blue-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6  "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p>Sign In </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
