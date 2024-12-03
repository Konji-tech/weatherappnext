import React from "react";
import { FaSearchLocation } from "react-icons/fa";

export default function Searchbox() {
  return (
    <form className="flex relative items-center justify-center h-10">
      <input
        type="text"
        placeholder="Search location.."
        className="px-4 py-2 w-[230px] border border-gray-300 rounded-l-md focus:outline-none focus:border-pastelPink h-full"
      />
      <button className="px-4  bg-pastelPink text-white rounded-r-md whitespace-nowrap h-full hover:bg-pink-300 ">
        <FaSearchLocation className=" text-pink-100 text-3xl" />
      </button>
    </form>
  );
}


{/* notes
    rounded-l-md on input then rounded-r-md on button so that they look like they are conjoined
    
    
    */}