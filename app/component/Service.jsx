import React from 'react';
import {MdOutlineScreenSearchDesktop} from "react-icons/md";
import {AiFillDatabase} from "react-icons/ai";

const Service = () => {

    const CardData = [
        {
            icon : <MdOutlineScreenSearchDesktop className="text-5xl" />,
            title : "UX Research",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },
        {
            icon : <AiFillDatabase className="text-5xl" />,
            title : "Data Analysis",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },
        {
            icon : <MdOutlineScreenSearchDesktop className="text-5xl" />,
            title : "User Flow Design",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },
        {
            icon : <MdOutlineScreenSearchDesktop className="text-5xl" />,
            title : "UX Research",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },
        {
            icon : <AiFillDatabase className="text-5xl" />,
            title : "Data Analysis",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },
        {
            icon : <MdOutlineScreenSearchDesktop className="text-5xl" />,
            title : "User Flow Design",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },
        {
            icon : <MdOutlineScreenSearchDesktop className="text-5xl" />,
            title : "UX Research",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },
        {
            icon : <AiFillDatabase className="text-5xl" />,
            title : "Data Analysis",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },
        {
            icon : <MdOutlineScreenSearchDesktop className="text-5xl" />,
            title : "User Flow Design",
            description : "UX research is a systematic and exploratory process that aims to explore users' behaviour, needs, motivations and preferences",
        },

    ]


    const SectionTittle = ()=>{
        return (
            <div className="flex flex-col items-center w-fit mx-auto mt-[150px]">
                <h5 className="text-center text-lg companyText font-semibold">SERVICE </h5>
                <h2 className="text-2xl text-white font-medium mt-1 ">PROVIDE FOR MY CLIENTS</h2>
                <div className="flex gap-2 mt-2 w-[70%]">
                    <span className=" h-[2.5px] rounded-full background block flex-grow "></span>
                    <span className=" h-[3px] rounded-full background block w-[5px] "></span>
                    <span className=" h-[3px] rounded-full background block w-[5px] "> </span>
                </div>
            </div>
        )
    }

    const  SectionCard = ({data})=>{
        return (
            <div className="mt-[60px]  grid grid-cols-3 gap-5 relative">
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px] absolute top-[-10px] left-[-10px]"></div>
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px] absolute bottom-[-10px] right-[-10px]"></div>
                <div className="h-[150px] w-[150px] background rounded-full blur-[150px] absolute bottom-[45%] right-[45%] z-[-1] "></div>
                {
                    data.map((item, i) => {
                        return (
                            <div key={i}
                                 className="col-span-1 companyBG rounded-lg p-6 cursor-pointer  hover:scale-105 transition-transform duration-300">
                                <div className="flex gap-4 items-center">
                                    {
                                        item.icon
                                    }
                                    <h1 className="text-xl font-normal">
                                        {item.title}
                                    </h1>
                                </div>

                                <p className="mt-4 opacity-80 text-base">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


    return (
        <div className="max-w-[1400px] mx-auto ">
            <SectionTittle/>
            <SectionCard data={CardData}/>
        </div>
    );
};

export default Service;