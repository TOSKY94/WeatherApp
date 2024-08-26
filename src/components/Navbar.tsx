import React from "react";
import { MdWbSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";

type Props = {
  city: string;
};

export default function Navbar({ city }: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex items-center px-3">
        <div className="flex items-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </div>
        <div className="flex ml-auto gap-2 items-center">
          <section className="flex gap-2 items-center">
            <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
            <MdOutlineLocationOn className="text-3xl" />
            <p className="text-slate-900/80 text-sm">{city}</p>
          </section>
          <SearchBox />
        </div>
      </div>
    </nav>
  );
}
