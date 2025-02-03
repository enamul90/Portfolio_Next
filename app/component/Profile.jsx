import React from 'react';
import {MdOutgoingMail} from "react-icons/md";
import {FaTelegramPlane, FaWhatsapp} from "react-icons/fa";
import {PiSkypeLogoBold} from "react-icons/pi";

const Profile = () => {

    const PersonalDetails = ()=>{
        return (
            <>
                <h1 className="text-2xl">Personal Details</h1>
                <p className="mt-4 text-sm">
                    Myself MD Enamul Hossen . I'm a Professional Graphic & UX/UI Designer. Generally, I Create Responsive
                    Web User Interface and Mobile App User Interfaces. Already I have experience working with some companies and teams.
                </p>
                <div className="mt-4 flex flex-row gap-4">
                    <button className="text-white p-2  text-2xl rounded-lg boxShadow "><MdOutgoingMail /></button>
                    <button className="text-white p-2  text-2xl rounded-lg boxShadow "><FaWhatsapp /></button>
                    <button className="text-white p-2  text-2xl rounded-lg boxShadow "><FaTelegramPlane /></button>
                    <button className="text-white p-2  text-2xl rounded-lg boxShadow "><PiSkypeLogoBold /></button>
                </div>
            </>
        )
    }

    const skills = ()=>{
        return (
            <>
                <div>
                    <h1 className="text-2xl">Personal Details</h1>

                </div>

            </>
        )
    }


    return (
        <div className="grid grid-cols-8 relative z-10 max-w-[1400px] rounded-2xl mx-auto  p-6 companyBG border borderColor mt-[-120px] ">
            <div className="col-span-3 "><PersonalDetails /></div>


        </div>
    );
};

export default Profile;