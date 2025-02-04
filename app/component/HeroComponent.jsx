import React from 'react';
import Image from 'next/image'
import Pattern from  "@/public/images/BgPattarn.png"
import myPhoto from  "@/public/images/myphoto.png"
import {FaArrowDown, FaBehance, FaGit, FaLinkedinIn,} from "react-icons/fa";

const HeroComponent = () => {

    const HeroBG = ()=>{
        return (
            <div className="h-full w-full absolute top-0 left-0 overflow-hidden HeroBG ">
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px]"></div>
                <div className="h-[150px] w-[150px] background rounded-full blur-[120px] absolute bottom-0 right-0"></div>
                <Image src={Pattern} alt="Hero" className="min-h-full min-w-full"/>
            </div>
        )
    }

    const Nave = ()=>{
        return (
            <div className="w-full absolute top-5 left-0 flex justify-between  ">
                <h1 className="text-3xl font-semibold  companyText ">Enamul.</h1>
                <button
                    className="flex w-fit ms-auto  items-center gap-4 companyBG text-white companyText font-semibold  px-5 py-3 rounded-2xl shadow-lg boxShadow ">
                    Download CV
                    <FaArrowDown/>
                </button>
            </div>
        )
    }
    const HeroText = ()=>{
        return (
            <>
                <h3 className="text-lg font-normal companyText">Looking  for a Javascript Developer</h3>
                <h1 className="text-6xl font-semibold companyText mt-2">Here I'am Enamul Hossen</h1>
                <p className="text-white mt-2 ">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
                    , sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, </p>

                <div className="mt-6 flex items-center gap-5">
                    <button className="companyText px-5 py-2 border text-xl rounded-lg borderColor ">Hire Me</button>
                    <button className="companyText px-5 py-3 text-2xl rounded-lg boxShadow companyBG  "><FaGit /></button>
                    <button className="companyText px-5 py-3 text-2xl rounded-lg boxShadow companyBG  "><FaBehance /></button>
                    <button className="companyText px-5 py-3 text-2xl rounded-lg boxShadow companyBG  "><FaLinkedinIn /></button>
                </div>
            </>
        )
    }

    const HeroImage = ()=>{
        return(
            <>
                <Image src={myPhoto} alt="Hero" className=" min-h-full pt-[50px]" />
            </>
        )
    }



    return (
        <div className="h-screen w-screen overflow-hidden bg-black">
            <HeroBG />

            <div className="relative z-10 max-w-[1400px] mx-auto h-full ">
                <Nave />

                <div className="grid grid-cols-9 gap-8 h-full">
                    <div className="col-span-4 flex flex-col justify-center">
                        <HeroText/>
                    </div>
                    <div className="col-span-5 flex items-end justify-center ">
                        <HeroImage/>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default HeroComponent;