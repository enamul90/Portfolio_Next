"use client"
import React from 'react';

const Summary = () => {

    const AwadList = [
        {
            number : "3.5K ",
            title : "Job Done Successfully"
        },
        {
            number : "04 ",
            title : "Award Winner"
        },
        {
            number : "08+",
            title : "Years Experience"
        },

    ]


    const Text = ()=>{
        return(
            <>
                <p className=" text-lg font-normal leading-[150%] text-center lg:text-start ">
                    UX research is a systematic and exploratory process that aims to explore users'
                    behaviour, needs, motivations and preferences
                </p>
            </>
        )
    }

    const MyAward = ({data})=>{

        return(
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-x-10 gap-y-4 mt-4 lg:mt-0 ">
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <h1 className="text-5xl font-semibold  text-center lg:text-start">{item.number} </h1>
                                <p className="text-base mt-1 opacity-80 font-normal text-center lg:text-start ">{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>


        )
    }


    return (
        <div  className="mt-[100px] summary-box py-10 px-3 lg:px-0 ">
            <div className="max-w-[1150px] mx-auto py-8 grid lg:grid-cols-4 grid-cols-2 gap-6 ">
                <div className="col-span-2 flex items-center">
                    <Text />
                </div>
                <div className="col-span-2 ">
                    <MyAward data={AwadList} />
                </div>
            </div>
        </div>
    );
};

export default Summary;