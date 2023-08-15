import { TbDropletCode } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  
  function handleToggle() {
    setNavbar(!navbar); // Toggle the navbar state
  }

  return (
    <>
      <header className="flex lg:justify-evenly max-lg:justify-between items-center p-4 shadow-lg">
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
           <a href=""><li>Why us?</li></a> 
          </ul>
        </div>
        {/* Right-nav */}
        <div className="flex gap-4 lg:pr-4 items-center">
          <Link to="/login">
            <FaUserCircle className="icons" />
          </Link>
          <GiHamburgerMenu
            className="text-3xl lg:hidden cursor-pointer"
            onClick={handleToggle}
          />
        </div>
      </header>
      {navbar && 
        <div className="bg-primary w-full text-white py-4 lg:hidden">
          <ul className="flex flex-col gap-5 pl-3">
          <a href=""><li className="li">Home</li></a>  
           <a href="/#course"><li className="li">Courses</li></a> 
           <a href="/#testimonial"><li className="li">Our testimonials</li></a> 
           <a href="/#contact"><li className="li">Contact</li></a> 
           <a href=""><li className="li">Why us?</li></a> 
          </ul>
        </div>
      }
    </>
  );
}
