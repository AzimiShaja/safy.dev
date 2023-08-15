import {BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPython, BiLogoReact, } from "react-icons/bi";
import {SiExpress} from "react-icons/si";
import {FiArrowUpRight} from "react-icons/fi";

export default function Course() {
    return (
        <div id="course" className="py-10 md:px-60 px-3">
            <div className="">
            <h1 className="text-4xl font-bold">Courses</h1>
            <div className="bg-orange-400 w-full h-1 relative top-5"></div>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 pt-12 xl:gap-5 gap-10">
                <div className="p-4  shadow-lg rounded-lg bg-primary text-white">
                    <h2 className="text-2xl font-semibold">MERN Stack</h2>
                    <p className="text-justify mt-5 leading-6">The MERN stack combines MongoDB, Express.js, React, and Node.js 
                        to enable developers to build full-stack web applications with a 
                        flexible NoSQL database, a server-side framework, a JavaScript 
                        library for user interfaces, and a runtime environment 
                        for server-side scripting.</p>
                        <div className="flex items-center gap-4  pt-3">
                            <p className="">Languages:</p>
                            <BiLogoNodejs className="icons" />
                            <SiExpress className="icons" />
                            <BiLogoMongodb className="icons" />
                            <BiLogoReact className="icons" />
                        </div>

                        <div className="flex items-center gap-4 mt-3">
                            <p>prerequisites:</p>
                            <BiLogoJavascript className="icons text-yellow-300" />
                        </div>
                 
                    <div className="flex max-md:flex-col gap-4 mt-4">
                        <button className="btns border border-white bg-white text-primary flex gap-1 items-center justify-center">Enrol Now<FiArrowUpRight /></button>
                        <button className="underline">Show More</button>
                    </div>
                </div>
                <div className="p-4 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold">JavaScript for Beginners</h2>
                    <p className="text-justify mt-5 leading-6">Immerse yourself in the dynamic realm of web development through our meticulously crafted 'JavaScript for Beginners' course, offering you a hands-on and comprehensive exploration of fundamental programming concepts, adept DOM manipulation techniques, and the art of crafting interactive web experiences that engage users on multiple levels.</p>
                   
                    <div className="flex items-center gap-4  pt-3">
                        <p className="">Languages:</p>
                        <BiLogoJavascript className="icons text-yellow-400" />
                    </div>
                    <div className="flex max-md:flex-col gap-4 mt-4">
                    <button className="btns bg-primary text-white flex gap-1 items-center justify-center">Enrol Now<FiArrowUpRight /></button>
                        <button className="underline">Show More</button>
                    </div>
                   
                </div>
                <div className="p-4  shadow-lg rounded-lg bg-primary text-white">
                    <h2 className="text-2xl font-semibold">Java OOP</h2>
                    <p className="text-justify mt-5 leading-6">Java Object-Oriented Programming (OOP) is a powerful paradigm that 
                                        allows developers to design and build software using classes, 
                                        objects, and the principles of encapsulation, inheritance, and polymorphism, enabling modular, reusable, and efficient code construction.</p>
                        <div className="flex items-center gap-4  pt-3">
                            <p className="">Languages:</p>
                            <BiLogoJava className="icons" />
                        </div>

                        <div className="flex items-center gap-4 mt-3">
                            <p>prerequisites: Java fundemntals</p>
                        </div>
                 
                    <div className="flex max-md:flex-col gap-4 mt-4">
                        <button className="btns border border-white bg-white text-primary flex gap-1 items-center justify-center">Enrol Now<FiArrowUpRight /></button>
                        <button className="underline">Show More</button>
                    </div>
                </div>
                <div className="p-4 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold">Absolute Python</h2>
                    <p className="text-justify mt-5 leading-6">'Absolute Python' is an immersive program that equips learners with comprehensive skills in Python, covering fundamental concepts, data manipulation, and advanced topics, enabling them to excel in diverse coding pursuits.</p>
                   
                    <div className="flex items-center gap-4  pt-3">
                        <p className="">Languages:</p>
                        <BiLogoPython className="icons" />
                    </div>
                    <div className="flex max-md:flex-col gap-4 mt-4">
                    <button className="btns border border-white bg-primary text-white flex gap-1 items-center justify-center">Enrol Now<FiArrowUpRight /></button>
                        <button className="underline">Show More</button>
                    </div>
                   
                </div>
                <div className="p-4  shadow-lg rounded-lg bg-primary text-white">
                    <h2 className="text-2xl font-semibold">Java for Absolute Begginners</h2>
                    <p className="text-justify mt-5 leading-6">Discover the world of programming with 'Java for Absolute Beginners,' a beginner-friendly course that introduces you to Java's basics, equipping you with essential skills to start your coding journey confidently.</p>
                        <div className="flex items-center gap-4  pt-3">
                            <p className="">Languages:</p>
                            <BiLogoJava className="icons" />
                        </div>
                 
                    <div className="flex max-md:flex-col gap-4 mt-4">
                        <button className="btns border border-white bg-white text-primary flex gap-1 items-center justify-center">Enrol Now<FiArrowUpRight /></button>
                        <button className="underline">Show More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}