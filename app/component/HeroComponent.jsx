
import React from 'react';
import Image from 'next/image'
import Pattern from  "@/public/images/BgPattarn.png"
import myPhoto from  "@/public/images/myphoto.png"
import {FaArrowDown, FaBehance, FaGit, FaLinkedinIn,} from "react-icons/fa";

const HeroComponent = () => {

    const HeroBG = ()=>{
        return (
            <div className="h-full w-full absolute top-0 left-0  HeroBG ">
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px]"></div>
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px] absolute bottom-[-100px] right-0"></div>
                <Image src={Pattern} alt="Hero"  className="absolute top-0 left-0 w-full h-full" />
            </div>
        )
    }

    const Nave = ()=>{
        return (
            <div className="w-full fixed top-0 left-0  py-3 px-3 companyBG">
                <div className="flex justify-between items-center max-w-[1400px] mx-auto ">
                    <h1 className="mt-1 text-2xl lg:text-3xl font-semibold  ">Enamul.</h1>
                    <button
                        className="flex w-fit ms-auto  justify-center items-center gap-4 text-white companyText font-semibold px-2  lg:px-5 py-2 rounded-lg border border-[#FBC76A]
                    hover:scale-105 transition-transform duration-300
                    ">
                        <span className="hidden lg:block">Download CV</span>
                        <FaArrowDown/>
                    </button>
                </div>
            </div>
        )
    }
    const HeroText = () => {
        return (
            <>
                <h3 className="text-lg font-normal companyText">Looking for a Javascript Developer</h3>
                <h1 className="text-4xl lg:text-7xl font-semibold companyText mt-2">Here I'am Enamul Hossen</h1>
                <p className="text-white text-sm lg:text-base mt-2 ">Consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat
                    , sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, </p>

                <div className="mt-6 flex items-center gap-4  lg:gap-5">
                    <button className="companyText  px-5 py-2 border text-base lg:text-xl rounded-lg borderColor hover:scale-110 transition-transform duration-300 ">Hire Me</button>
                    <button className="companyText  px-5 py-3 text-lg lg:text-2xl rounded-lg boxShadow companyBG hover:scale-110 transition-transform duration-300  "><FaGit /></button>
                    <button className="companyText  px-5 py-3 text-lg lg:text-2xl rounded-lg boxShadow companyBG hover:scale-110 transition-transform duration-300  "><FaBehance /></button>
                    <button className="companyText  px-5 py-3 text-lg lg:text-2xl rounded-lg boxShadow companyBG hover:scale-110 transition-transform  duration-300 "><FaLinkedinIn /></button>
                </div>
            </>
        )
    }

    const HeroImage = ()=>{
        return(
            <div className="flex flex-row items-center justify-center h-full p-2 ">
                <Image src={myPhoto} quality={100} alt="Hero" className=" w-fit h-[90%] "  />
            </div>
        )
    }


    return (
        <div className="h-screen w-screen overflow-hidden px-2 lg:px-0 ">
            <HeroBG />
            <div className="relative z-50 max-w-[1400px] mx-auto h-full ">
                <Nave />
                <div className="grid grid-cols-4  lg:grid-cols-8 gap-28 h-full">
                    <div className="col-span-4 flex flex-col justify-center">
                        <HeroText/>
                    </div>
                    <div className="col-span-4  items-end justify-center hidden lg:flex ">
                        <HeroImage/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroComponent;