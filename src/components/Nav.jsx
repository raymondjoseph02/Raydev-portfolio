import Headroom from "headroom.js";
import { useEffect } from "react";
import PrimaryBtn from "./PrimaryBtn";
import emoji_avater from "../assets/images/avater-1.png";
function Nav() {
  useEffect(() => {
    const header = document.querySelector("header");
    const headroom = new Headroom(header);
    headroom.init();
  }, []);
  return (
    <>
      <header className=" bg-white header">
        <nav className="flex justify-between items-center py-4 px-40 backdrop:blur-md">
          <div className="bg-gray-300  rounded-full">
            <a href="/">
              <img src={emoji_avater} alt="" className="size-16" />
            </a>
          </div>
          <div className="flex  items-center gap-12">
            <ul className="flex  gap-12">
              <li className="text-lg font-sirin cursor-pointer font-medium relative pb-1 group ">
                <span className="capitalize">About</span>
                <span className="absolute w-0 group-hover:w-full transition-all ease-in-out duration-300  h-[2px] inline-block bg-black bottom-0 left-0 "></span>
              </li>
              <li className="text-lg font-sirin cursor-pointer font-medium relative pb-1 group ">
                <span className="capitalize">Story</span>
                <span className="absolute w-0 group-hover:w-full transition-all ease-in-out duration-300  h-[2px] inline-block bg-black bottom-0 left-0 "></span>
              </li>
              <li className="text-lg font-sirin cursor-pointer font-medium relative pb-1 group ">
                <span className="capitalize">Projects</span>
                <span className="absolute w-0 group-hover:w-full transition-all ease-in-out duration-300  h-[2px] inline-block bg-black bottom-0 left-0 "></span>
              </li>
              <li className="text-lg font-sirin cursor-pointer font-medium relative pb-1 group ">
                <span className="capitalize">contact</span>
                <span className="absolute w-0 group-hover:w-full transition-all ease-in-out duration-300  h-[2px] inline-block bg-black bottom-0 left-0 "></span>
              </li>
              <li className="text-lg font-sirin cursor-pointer font-medium relative pb-1 group ">
                <span className="capitalize">experience</span>
                <span className="absolute w-0 group-hover:w-full transition-all ease-in-out duration-300  h-[2px] inline-block bg-black bottom-0 left-0 "></span>
              </li>
            </ul>
            <div>
              <PrimaryBtn />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;
