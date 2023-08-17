import { TbDropletCode } from "react-icons/tb";
import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {SlBasket} from "react-icons/sl";
export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  return (
    <>
      <header className="flex justify-evenly max-lg:justify-between items-center p-4 shadow-lg">
        {/* left-nav */}
        <div className="flex items-center gap-2 text-3xl">
          <TbDropletCode className="logo" />
          <Link to="/">Safy.dev</Link>
        </div>
        {/* Middle-Nav */}
        <div className="flex items-center gap-4 max-lg:hidden py-2">
          <ul className="flex gap-4">
          <a href="/"><li>Home</li></a>  
           <a href="/#course"><li>Courses</li></a> 
           <a href="/#testimonial"><li>Our testimonials</li></a> 
           <a href="/#contact"><li>Contact</li></a> 
           <a href="/#whyus"><li>Why us?</li></a> 
          </ul>
        </div>
        {/* Right-nav */}
        <div className="flex gap-4 lg:pr-4 items-center">
          <Link to="/login">
            <FaUserCircle className="icons" />
          </Link>
            <SlBasket className="icons" />
          <GiHamburgerMenu
            className="text-3xl lg:hidden cursor-pointer duration-500 active:rotate-90"
            onClick={toggleExpanded}
          />
        </div>
      </header>
            <div className={`bg-primary w-full text-white lg:hidden ${
              expanded ? 'expanded'  : 'not-expanded'
            }`}>
              <ul className="flex flex-col gap-5 pl-3">
                <a href="/"><li className="li">Home</li></a>
                <a href="/#course"><li className="li">Courses</li></a>
                <a href="/#testimonial"><li className="li">Our testimonials</li></a>
                <a href="/#contact"><li className="li">Contact</li></a>
                <a href="/#whyus"><li className="li">Why us?</li></a>
              </ul>
          </div>     
    </>
  );
}
