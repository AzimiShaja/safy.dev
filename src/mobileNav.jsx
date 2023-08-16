import React from 'react';

function MobileNavigation() {
  return (
    <div className="bg-primary w-full text-white py-4 lg:hidden">
      <ul className="flex flex-col gap-5 pl-3">
        <a href="#"><li className="li">Home</li></a>
        <a href="/#course"><li className="li">Courses</li></a>
        <a href="/#testimonial"><li className="li">Our testimonials</li></a>
        <a href="/#contact"><li className="li">Contact</li></a>
        <a href="#"><li className="li">Why us?</li></a>
      </ul>
    </div>
  );
}

export default MobileNavigation;
