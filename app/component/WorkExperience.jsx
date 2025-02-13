import React from 'react';

const WorkExperience = () => {
    const SectionTittle = ()=>{
        return (
            <div className="flex flex-col items-center w-fit mx-auto mt-[150px]">
                <h5 className="text-center text-lg companyText font-semibold">EXPERIENCE </h5>
                <h2 className="text-2xl text-white font-medium mt-1 ">PREVIOUS WORK EXPERIENCE</h2>
                <div className="flex gap-2 mt-2 w-[70%]">
                    <span className=" h-[2.5px] rounded-full background block flex-grow "></span>
                    <span className=" h-[3px] rounded-full background block w-[5px] "></span>
                    <span className=" h-[3px] rounded-full background block w-[5px] "> </span>
                </div>
            </div>
        )
    }


    return (
        <div>
            <SectionTittle />

        </div>
    );
};

export default WorkExperience;