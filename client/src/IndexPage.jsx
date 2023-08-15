import Header from "./Header";
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import Course from "./components/Course";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function IndexPage() {
    return (
        <>
            <div id="home" className="flex flex-col min-h-full bg-bgColor">
                <Header />
                <div className="max-lg:mt-20 grid grid-cols-2 min-h-screen place-items-center max-md:grid-cols-1">
                    <div className="h-full flex flex-col justify-center items-center w-10/12">
                        <h1 className="text-6xl text-center mb-10 font-bold max-lg:text-4xl ">Unlock Your Coding Potential with <span>Safy.<span className="text-orange-400">dev</span> </span> </h1>
                        <h2 className="text-3xl text-center font-thin max-lg:text-xl">Learn, Practice, and Master Coding Skills with Interactive Courses and Real-world Projects</h2>
                        <div className="flex flex-col items-center mt-10">
                        <BsFillArrowDownCircleFill className="text-orange-400 text-4xl animate-bounce" />
                       <a href="#course"> <button className="cursor-pointer border-primary border m-10 px-4 py-2 rounded-xl bg-primary text-white duration-300 hover:bg-transparent hover:text-primary">Exlpore More</button></a>
                        </div>
                    </div>
                    <div className="w-full">
                    <img className="rounded-l-full shadow-2xl" src="images/coding-bg.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <Course />
            <Testimonials />
            <Contact />
            <Footer />
        </>
     
    )
}