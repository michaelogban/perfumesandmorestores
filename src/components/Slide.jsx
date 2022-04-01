// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
// import { useState } from "react";
import img1 from "../images/perfumesbg.jpg"
import img2 from "../images/heropef.png"
import { Link } from "react-router-dom";


export default function Slide() {
    // const [slider, setSlider] = useState(0)
    // // setSlider(0)
    
    // const rightArrorw = () => {
    //     if(slider == -200){
    //         setSlider(0)
    //     } else{
    //         setSlider(slider - 100)
    //     }
    // }
    // const leftArrorw = () => {
    //     if(slider === 0){
    //         setSlider(-200)
    //     } else {
    //         setSlider(slider + 100)
    //     }
    // }

  return (
    <div className="h-[100vh + 3rem] pt-20 overflow-hidden bg-gray-100 bg-opacity-80">
      <div className="flex w-full">
        <div className="w-full h-screen relative">
          <img
            src={img1}
            alt=""
            className="absolute h-screen w-screen top-0 -z-10 opacity-50 object-cover"
          />
          <div className="w-screen mx-auto mt-40 px-5 flex flex-col items-center justify-center gap-4">
            <h1 className="font-bold text-gray-800 text-center text-5xl md:text-6xl tracking-widest">
              WELCOME
            </h1>
            <p className="mx-5 text-md text-center">
              Get original perfumes at affordable prices from the comfort of
              your home
            </p>
            <Link to="/product">
              <button className="text-white bg-orange-500 shadow-md p-2 rounded-md">
                SHOP NOW
              </button>
            </Link>
            <img src={img2} alt="" className="h-60 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
