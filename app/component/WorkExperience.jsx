import React from 'react';
import {IoCheckmarkDone} from "react-icons/io5";

const WorkExperience = () => {

    const companyList = [
        {
            post: "UI UX Designer",
            timeline: "2018 - Present",
            tittle : "Freelancing | Fiver",
            description : [
                {content : "I have created modern, minimal and responsive web UI"},
                {content : "As per client demand, I have created attractive, responsive dashboard design"},
                {content : "And I have designed Many mobile app UI"},
            ]
        },
        {
            post: "UI UX Designer",
            timeline: "2018 - Present",
            tittle : "LIDI IT | USA",
            description : [
                {content : "I have created modern, minimal and responsive web UI"},
                {content : "As per client demand, I have created attractive, responsive dashboard design"},
                {content : "And I have designed Many mobile app UI"},
            ]
        }
    ]

    const SectionTittle = ()=>{
        return (
            <div className="flex flex-col items-center w-fit mx-auto mt-[150px]">

                <h5 className="text-center text-base lg:text-lg companyText font-semibold">EXPERIENCE </h5>
                <h2 className="text-xl lg:text-2xl text-white font-medium mt-1 ">PREVIOUS WORK EXPERIENCE</h2>
                <div className="flex gap-2 mt-2 w-[70%]">
                    <span className=" h-[2px] lg:h-[2.5px] rounded-full background block flex-grow "></span>
                    <span className=" h-[2.5px] lg:h-[3px] rounded-full background block w-[5px] "></span>
                    <span className=" h-[2.5px] lg:h-[3px] rounded-full background block w-[5px] "> </span>
                </div>
            </div>
        )
    }

    const Experience = ({data}) => {
        return (
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 gap-y-3 mt-[60px] max-w-[1100px] mx-auto">
                <div
                    className="h-[200px] w-[200px] bg-red-400 blur-3xl absolute bottom-[-70px] left-[-70px] opacity-35 "></div>
                <div
                    className="h-[200px] w-[200px] bg-red-400 blur-3xl absolute top-[-70px] right-[-70px] opacity-35 "></div>
                {
                    data.map((item, index) => {
                        return (
                            <div className="companyBG rounded-lg p-6" key={index}>
                                <div className="flex justify-between items-center">
                                    <h2 className="text-base">{item.post}</h2>
                                    <h2 className="text-base">{item.timeline}</h2>
                                </div>
                                <h1 className="text-3xl font-semibold mt-3 mb-4">{item.tittle}</h1>
                                {
                                    item.description.map((item, index) => {
                                        return (
                                            <ul key={index} className="opacity-90 mb-1">
                                                <li className="flex gap-2"><IoCheckmarkDone
                                                    className="mt-1"/> {item.content}</li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>
        )
    }


    return (
        <div className="h-fit">
            <SectionTittle/>
            <Experience data={companyList}/>
        </div>
    );
};

export default WorkExperience;