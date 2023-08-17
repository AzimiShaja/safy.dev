import {AiFillStar} from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";
import courses from "./Courses";
export default function Course() {
    return (
        <div id="course" className="py-10 md:px-60 px-3">
            <div>
            <h1 className="text-4xl font-bold">Courses</h1>
            <div className="bg-orange-400 w-full h-1 relative top-5"></div>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 pt-12 xl:gap-5 gap-6">
                {courses.map((course) =>{
                    return (
                        <div className="shadow-2xl p-4 bg-gray-50">
                    <img className="rounded-lg" src={course.img}  alt="" />
                    <div className="mt-4 flex flex-col gap-1">
                        <h1 className="font-bold text-xl">{course.title}</h1>
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
                </div>
                    )
                })}
            </div>
        </div>
    )
}