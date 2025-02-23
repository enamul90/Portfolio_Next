"use client";
import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Image from "next/image";
import coverPhoto from "@/public/images/projectImage.png"
import { useRef } from "react";


const ProjectComponent = () => {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (direction === "left") {
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
        } else {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }

    };

    const ProjectData = [
        {
            "project_name": "Portfolio Site - Full Stack Developer",
            "project_url": "https://portfolio.com",
            "screenshot": coverPhoto
        },
        {
            "project_name": "E-commerce App - Back Development ",
            "project_url": "https://shopapp.com",
            "screenshot": coverPhoto
        },
        {
            "project_name": "Task Manager - UI UX Development ",
            "project_url": "https://taskmanager.com",
            "screenshot": coverPhoto
        },
        {
            "project_name": "Weather App - UI UX Development ",
            "project_url": "https://weatherapp.com",
            "screenshot": coverPhoto
        },
        {
            "project_name": "Weather App Product - Design",
            "project_url": "https://weatherapp.com",
            "screenshot": coverPhoto
        },
        {
            "project_name": "Weather App Product - Design",
            "project_url": "https://weatherapp.com",
            "screenshot": coverPhoto
        },

    ]


    const SectionTittle = ()=>{
        return (
            <div className="flex flex-col md:flex-row  justify-between items-end  mt-[100px] gap-y-3 px-3 ">
                <div className="me-auto">
                    <h5 className="text-base companyText font-medium flex gap-2 items-center">
                        <span className="block w-[15px] border borderColor"></span>
                        PROJECTS
                    </h5>
                    <h2 className="text-xl text-white font-medium ">RECENT COMPLETED WORK</h2>
                </div>

                <div className="flex justify-end items-center gap-3 ">
                    <button
                        onClick={() => scroll("left")}
                        className="h-[32px] w-[32px] border borderColor rounded-md hover:scale-110 transition-transform duration-300 ">
                        <IoIosArrowBack className="companyText mx-auto  block text-xl" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="h-[32px] w-[32px] border borderColor rounded-md hover:scale-110 transition-transform duration-300  ">
                        <IoIosArrowForward className="companyText mx-auto block text-xl  " />
                    </button>
                </div>
            </div>
        )
    }

    const ProjectList = ({data}) => {
        return (
            <div
                ref={scrollRef}
                className="scrollbar-hide relative z-20 mt-[30px] w-full h-fit flex flex-row gap-6 overflow-x-auto scrollbar "
            >
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="col-span-1 w-[300px] flex-shrink-0 ">
                                <div className="h-[360px]  rounded-lg overflow-hidden  ">
                                    <Image  src={item.screenshot} alt="project image" className="w-full h-full"  />
                                </div>

                                <h5
                                    className="px-4 py-3 relative z-20 bg-[#3D3E42]  font-medium text-lg mt-[-16%] w-[90%]
                                    border-s-8 border-[#FBC76A] cursor-pointer rounded-e-lg

                                    ">
                                    {item.project_name}
                                </h5>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const BackgroundEffect = ( ) =>{
        return(
            <div className="h-[200px] w-full bg-[#FBC76A] absolute mt-[-150px] left-0 blur-[100px] opacity-35"></div>
        )
    }



    return (
        <div className="max-w-[1400px] mx-auto">
            <SectionTittle />
            <ProjectList data={ProjectData} />
            <BackgroundEffect />
        </div>
    );
};

export default ProjectComponent;