import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs";
import {FaRegCopyright} from "react-icons/fa";
export default function Footer(){
    return (
        <footer className="w-full bg-primary py-10 flex flex-col gap-5 items-center justify-center">
            <div className="flex gap-5">
            <BsInstagram className="footer-icons" />
            <BsGithub className="footer-icons" />
            <BsTwitter className="footer-icons" />
            <BsFacebook className="footer-icons" />
            </div>
            <div className="flex items-center gap-4 py-2">
                <ul className="flex gap-4 text-white">
                <a href="/#home"><li>Home</li></a>  
                <a href="/#course"><li>Courses</li></a> 
                <a href="/#testimonial"><li>Our testimonials</li></a> 
                <a href="/#contact"><li>Contact</li></a> 
                </ul>
            </div>
            <div className="text-white flex gap-1">
                <p className="flex gap-1 items-center text-white border-r-2 px-2">Copyright <FaRegCopyright /> 2023</p>
                <p className="px-2">All rights are reserved</p>
            </div>
        </footer>
    )
}