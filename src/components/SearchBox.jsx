import React, { useState } from "react";
import SearchIcon from "../assets/Search.svg";
import CloseIcon from "../assets/Cancel.svg";

const SearchBox = ({ searchText, handleChange, handleClear }) => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="relative w-full bg-[#F0F0F6]">
        <img
          src={SearchIcon}
          alt="search-icon"
          className="absolute z-10 top-3 left-3 text-white"
        />
        <input
          type="text"
          value={searchText}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search"
          className="w-full h-10 pl-10 pr-10 rounded-md border border-gray-300 focus:outline-none focus:border-[#5E56E7] focus:ring-1 focus:ring-[#5E56E7] text-[#333333] transition-all font-semibold"
        />
        {searchText && (
          <img
            src={CloseIcon}
            alt="close-icon"
            className="absolute top-4 right-3 hover:cursor-pointer"
            onClick={handleClear}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBox;
