import {AiFillStar} from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";
import courses from "./Courses";
import { useState , useEffect } from "react";
export default function Course() {
    const [isTransition, setIsTransition] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const revealThreshold = 500; 
    
        if (scrollPosition > revealThreshold) {
          setIsTransition(true);
        } else {
          setIsTransition(false);
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div id="course" className={`py-10 md:px-60 px-3 ${isTransition ? "translated" : "not-translated"}`}>
            <div>
            <h1 className="text-4xl font-bold">Courses</h1>
            <div className="bg-orange-400 w-full h-1 relative top-5"></div>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 pt-12 xl:gap-5 gap-6">
                {courses.map((course) =>{
                    return (
                        <div key={course.id} className="shadow-2xl p-4 bg-gray-50 rounded-sm cursor-pointer flex flex-col justify-between">
                            <img className="w-full hover:opacity-70" src={course.img}  alt="" />
                            <div className="mt-4 flex flex-col gap-1">
                                <h1 className="font-bold text-lg">{course.title}</h1>
                                <p className="text-gray-400">{course.instructor}</p>
                            </div>
                            <div className="flex  items-center justify-between">
                                <div className="flex  gap-2 mt-2 items-center">
                                    <p>{course.rating}</p>
                                    <div className="flex items-center">
                                        <AiFillStar className="text-yellow-500" />
                                        <AiFillStar className="text-yellow-500" />
                                        <AiFillStar className="text-yellow-500" />
                                        <AiFillStar className="text-yellow-500" />
                                        <BsStarHalf className="text-yellow-500 text-sm" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="font-semibold">{course.price}₺</p>
                                </div>
                            </div>
                            <div className=" flex justify-center items-center">
                                <button className="p-2 mt-5 rounded-md text-white bg-primary cursor-pointer w-full" onClick={() =>{
                                    alert(`${course.title} added to cart`);
                                }}>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}