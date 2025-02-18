"use client"
import React from 'react';
import {MdOutgoingMail} from "react-icons/md";
import {FaTelegramPlane, FaWhatsapp} from "react-icons/fa";
import {PiSkypeLogoBold} from "react-icons/pi";

const Profile = () => {
    const [active, setActive] = React.useState("code");

    const DesignSkills = [
        {
            "tools": "Fimga",
            "availity": "90%",
            "class": "w-[90%]",
        },
        {
            "tools": "Adobe XD",
            "availity": "85%",
            "class": "w-[85%]",
        },
        {
            "tools": "Adobe illustrator",
            "availity": "80%",
            "class": "w-[80%]",
        },
        {
            "tools": "Adobe Photoshop",
            "availity": "70%",
            "class": "w-[70%]",
        },
        {
            "tools": "Miro",
            "availity": "70%",
            "class": "w-[70%]",
        },
        {
            "tools": "Google Form",
            "availity": "70%",
            "class": "w-[70%]",
        },
    ]

    const DevSkills = [
        {
            "tools": "HTML 5",
            "availity": "90%",
            "class": "w-[90%]"
        },
        {
            "tools": "CSS 3",
            "availity": "85%",
            "class": "w-[85%]",

        },
        {
            "tools": "Javascript ES6",
            "availity": "80%",
            "class": "w-[80%]"
        },
        {
            "tools": "Node js",
            "availity": "70%",
            "class": "w-[70%]"
        },
        {
            "tools": "React js",
            "availity": "70%",
            "class": "w-[70%]"
        },
        {
            "tools": "Next js",
            "availity": "70%",
            "class": "w-[70%]"
        },
    ]

    const PersonalDetails = ()=>{
        return (
            <>
                <h1 className="text-xl py-2">PERSONAL DETAILS</h1>
                <p className="mt-2 text-base opacity-95">
                    Myself MD Enamul Hossen . I'm a Professional Graphic & UX/UI Designer. Generally, I Create Responsive
                    Web User Interface and Mobile App User Interfaces. Already I have experience working with some companies and teams.
                </p>
                <div className="mt-5 flex flex-row gap-4">
                    <button className="text-white p-2  text-xl lg:text-2xl rounded-lg boxShadow hover:scale-110 transition-transform duration-300"><MdOutgoingMail /></button>
                    <button className="text-white p-2  text-xl lg:text-2xl rounded-lg boxShadow hover:scale-110 transition-transform duration-300"><FaWhatsapp /></button>
                    <button className="text-white p-2  text-xl lg:text-2xl rounded-lg boxShadow hover:scale-110 transition-transform duration-300"><FaTelegramPlane /></button>
                    <button className="text-white p-2  text-xl lg:text-2xl rounded-lg boxShadow hover:scale-110 transition-transform duration-300"><PiSkypeLogoBold /></button>
                </div>
            </>
        )
    }


    const Skills = ({DesSkills,DevSkills})=>{
        return (
            <>
                <div className="flex flex-col lg:flex-row  justify-between items-center gap-y-3">
                    <h1 className="text-xl">MY PROFESSIONAL SKILLS</h1>
                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                setActive("code")
                            }
                            }
                            className={active === "code" ? "px-3 py-2 background rounded-md lg:text-base text-sm text-neutral-800 hover:scale-105 transition-transform duration-300" :
                                "hover:scale-105 transition-transform px-3 py-2 companyBG companyText rounded-md text-base boxShadow duration-300 "}
                        >
                            Code Skills
                        </button>
                        <button
                            onClick={() => {
                                setActive("design")
                            }
                            }
                            className={active === "design" ? "hover:scale-105 transition-transform px-3 py-2 background rounded-md lg:text-base text-sm text-neutral-800 duration-300" :
                                "hover:scale-105 transition-transform px-3 py-2 companyBG companyText rounded-md text-base boxShadow duration-300 "}

                        >
                            Design Skills
                        </button>
                    </div>
                </div>
                <div className="lg:mt-3 mt-5 grid grid-cols-2 gap-x-3 ">

                    {
                        active === "code" ? (
                            DevSkills.map((skill, i) => {
                                return (
                                    <div className="py-2 col-span-1 " key={i}>
                                        <div className="flex justify-between">
                                            <h6 className="text-sm">{skill.tools}</h6>
                                            <h6 className="text-sm">{skill.availity}</h6>
                                        </div>
                                        <div className="h-1 w-full bg-orange-100  rounded-full">
                                            <div className={`h-1  background mt-2 rounded-full ${skill.class}`}></div>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            DesSkills.map((skill, i) => {
                                return (
                                    <div className="py-2 col-span-1" key={i}>
                                        <div className="flex justify-between">
                                            <h6 className="text-sm">{skill.tools}</h6>
                                            <h6 className="text-sm">{skill.availity}</h6>
                                        </div>
                                        <div className="h-1 w-full bg-orange-100  rounded-full">
                                            <div className={`h-1  background mt-2 rounded-full ${skill.class}`}></div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }

                </div>
            </>
        )
    }


    return (
        <div className="grid grid-cols-5  lg:grid-cols-8  relative z-10 max-w-[1400px] rounded-2xl mx-auto
        lg:p-6 p-4   companyBG border borderColor mt-[-100px] gap-x-20 gap-y-10
        ">
            <div className="col-span-5 lg:col-span-3 ">
                <PersonalDetails/>
            </div>
            <div className="col-span-5 ">
                <Skills DesSkills={DesignSkills} DevSkills={DevSkills}/>
            </div>
        </div>
    );
};

export default Profile;