import React from 'react';

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
            tittle : "Freelancing | Fiver",
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

    const Experience = ({data}) => {
        return (
            <div className="grid grid-cols-2 mt-[60px] max-w-[1150px] mx-auto">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                lll
                            </div>
                        )
                    })
                }

            </div>
        )
    }


    return (
        <div>
            <SectionTittle />
            <Experience data={companyList}/>
        </div>
    );
};

export default WorkExperience;