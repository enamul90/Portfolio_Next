import React from 'react';
import {MdOutgoingMail} from "react-icons/md";
import {FaTelegramPlane, FaWhatsapp} from "react-icons/fa";
import {PiSkypeLogoBold} from "react-icons/pi";

const Profile = () => {

    const DesignSkills = [
        {
            "tools": "Fimga",
            "availity": "90%"
        },
        {
            "tools": "Adobe XD",
            "availity": "85%"
        },
        {
            "tools": "Adobe illustrator",
            "availity": "80%"
        },
        {
            "tools": "Adobe Photoshop",
            "availity": "70%"
        },
    ]

    const DevSkills = [
        {
            "tools": "Fimga",
            "availity": "90%"
        },
        {
            "tools": "Adobe XD",
            "availity": "85%"
        },
        {
            "tools": "Adobe illustrator",
            "availity": "80%"
        },
        {
            "tools": "Adobe Photoshop",
            "availity": "70%"
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
                    <button className="text-white p-2  text-2xl rounded-lg boxShadow "><MdOutgoingMail /></button>
                    <button className="text-white p-2  text-2xl rounded-lg boxShadow "><FaWhatsapp /></button>
                    <button className="text-white p-2  text-2xl rounded-lg boxShadow "><FaTelegramPlane /></button>
                    <button className="text-white p-2  text-2xl rounded-lg boxShadow "><PiSkypeLogoBold /></button>
                </div>
            </>
        )
    }

    const Skills = ({skills,DevSkills})=>{

        return (
            <>
                <div className="flex justify-between items-center">
                    <h1 className="text-xl">MY PROFESSIONAL SKILLS</h1>
                    <div className="flex gap-3">
                        <button className="px-3 py-2 companyBG companyText rounded-md text-lg boxShadow ">Code Skills</button>
                        <button className="px-3 py-2 background rounded-md text-lg text-neutral-800">Design Skills</button>
                    </div>
                </div>

                <div className="mt-4 bg-black">
                    {
                        skills.map((skill, i)=>{
                            return (
                                <div className="mb-2" key={i}>
                                    <div className="flex justify-between">
                                        <h6 className="text-sm">{skill.tools}</h6>
                                        <h6 className="text-sm">{skill.availity}</h6>
                                    </div>
                                    <div className="h-1 w-full bg-orange-100 mt-2 rounded-full">
                                        <div className="h-1 w-9 background mt-2 rounded-full"></div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </>
        )
    }


    return (
        <div className="grid grid-cols-7 gap-10 relative z-10 max-w-[1400px] rounded-2xl mx-auto
        p-6 companyBG border borderColor mt-[-100px]
        ">
            <div className="col-span-3 ">
                <PersonalDetails/>
            </div>
            <div className="col-span-4 ">
                <Skills skills={DesignSkills} DevSkills={DevSkills} />
            </div>
        </div>
    );
};

export default Profile;