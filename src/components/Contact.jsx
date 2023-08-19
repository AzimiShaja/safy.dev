import {BsFillSendFill} from "react-icons/bs";
import { useState , useEffect } from "react";
export default function Contact(){
    const [isTransition, setIsTransition] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const revealThreshold = 2500; 
    
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
        <div id="contact" className={`py-10 md:px-60 px-3 my-10 ${isTransition ? "translated" : "not-translated"}`}>
            <div className="">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <div className="bg-orange-400 w-full h-1 relative top-5"></div>
            </div>
            <div className="pt-12">
                <form className="flex flex-col max-md:items-center min-w-max gap-3 ">
                    <input type="text" className="border-primary" placeholder="Full name"/>
                    <input type="email" className="border-primary" placeholder="example@email.com"/>
                    <textarea className="w-72" rows="4" placeholder="your message"></textarea>
                    <button className="bg-orange-400 px-4 py-2 max-lg:w-5/12 lg:w-2/12 text-white rounded-lg flex items-center justify-center gap-2">Send <BsFillSendFill /></button>
                </form>
            </div>
        </div>
    )
}   