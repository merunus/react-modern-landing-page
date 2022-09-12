import React, { useRef, useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import useOnClickOutside from "use-onclickoutside";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setToggle(prevValue => !prevValue);
  };
  const handleClose = () => {
    setToggle(false);
  };

  useOnClickOutside(menuRef, handleClose);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="logo" className=" w-[124px] h-[32px]" />s
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white `}
          >
            <a href={`${item.title}`} onClick={handleClose}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div ref={menuRef} className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={handleToggle}
        />
        <div
          ref={menuRef}
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white `}
              >
                <a href={`${item.title}`} onClick={handleClose}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
