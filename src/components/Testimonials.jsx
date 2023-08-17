import testimonials from "./Testominals.js";
export default function Testimonials(){
    return (
        <div id="testimonial" className="py-20 md:px-60 px-3">
            <div>
            <h1 className="text-4xl font-bold">Our Testimonials</h1>
            <div className="bg-orange-400 w-full h-1 relative top-5"></div>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 pt-12 xl:gap-5 gap-10 place-items-center">
                {testimonials.map((data) =>{
                    return (
                        <div key={data.key} className="p-4 shadow-2xl rounded-lg transition-all  text-primary duration-500 hover:scale-110">
                    <div className="grid grid-cols-2 ">
                        <img className="rounded-l-full rounded-b-full w-10/12 object-cover relative top-3 shadow-2xl" src={data.pfp}/>
                        <div>
                            <h2 className="text-2xl font-semibold">{data.name}</h2>
                            <p className="text-left mt-3 leading-6">{data.review}</p>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
    )
}   