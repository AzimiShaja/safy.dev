import { Link } from "react-router-dom";
import Header from "../Header";
import {AiFillApple, AiFillGithub, AiFillGoogleCircle} from "react-icons/ai";
import Footer from "../components/Footer";
import React from "react";
export default function LoginPage() {
    return (
        <div className="flex flex-col justify-center h-screen pb-30 bg-bgColor">
            <Header />
            <div className="flex flex-col h-screen items-center justify-center">
                <h1 className="text-4xl mb-5">Login</h1>
                <form className="flex flex-col gap-4 min-w-fit">
                    <input type="email" placeholder="example@email.com" required/>
                    <input type="password" placeholder="password" required/>
                    <button className="bg-primary p-2 text-white text-xl rounded-lg mb-4 duration-300 hover:bg-transparent border hover:text-primary hover:border-primary" >Login</button>
                </form>
                <div>
                    <p className="text-gray-500">Don't have an account? <Link to="/register" className="underline text-black">Register now</Link> </p>
                </div>
                <div className="mt-5 flex items-center gap-3">
                    <AiFillGoogleCircle className="icons text-red-600" />
                    <AiFillGithub  className="icons"/> 
                    <AiFillApple  className="icons"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}