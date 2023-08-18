import {GiTeacher, GiStairsGoal} from "react-icons/gi";
import {BsTable} from "react-icons/bs";
export default function WhyUs() {
    return( 
        <div id="whyus" className="py-10 md:px-60 px-3">
        <div className="">
            <h1 className="text-4xl font-bold">Why Us?</h1>
            <div className="bg-orange-400 w-full h-1 relative top-5"></div>
        </div>
        <div className="mt-12 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-10 bg-red">
            <div className="shadow-xl flex flex-col justify-center items-center rounded-lg">
                <div className="bg-primary w-full rounded-lg flex flex-col items-center justify-center p-4 text-white gap-2">
                   <GiTeacher className="text-6xl "/>
                    <h1 className="text-2xl font-bold text-center">Expert Instructors</h1>
                </div>
                <p className="p-4 leading-6 text-justify">At safy.dev, our coding course is led by a team of expert instructors who are passionate about teaching and guiding students on their coding journey. Our instructors bring a wealth of industry experience and technical expertise to the table, ensuring that students receive a top-notch education in coding.</p>
            </div>
            <div className="shadow-xl flex flex-col justify-center items-center rounded-lg">
                <div className="bg-primary w-full rounded-lg flex flex-col items-center justify-center p-4 text-white gap-2">
                   <GiStairsGoal className="text-6xl "/>
                    <h1 className="text-2xl font-bold">Project-based Learning</h1>
                </div>
                <p className="p-4 leading-6 text-justify">Project-based learning is a powerful educational approach that puts the student at the center of the learning experience. At safy.dev, we believe in the effectiveness and value of project-based learning for coding education.</p>
            </div>
            <div className="shadow-xl flex flex-col justify-center items-center rounded-lg">
                <div className="bg-primary w-full rounded-lg flex flex-col items-center justify-center p-4 text-white gap-2">
                   <BsTable className="text-6xl "/>
                    <h1 className="text-2xl font-bold text-center">Comperhensive Curriculum </h1>
                </div>
                <p className="p-4 leading-6 text-justify">At safy.dev, we take pride in offering a comprehensive curriculum that equips students with the knowledge and skills needed to excel in the world of coding. Our curriculum is carefully designed to provide a well-rounded education, covering essential programming concepts, practical examples, and real-world projects.
</p>
            </div>
        </div>
       
    </div>
    )
}