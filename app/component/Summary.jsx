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
                <p className=" text-lg font-normal leading-[150%] ">
                    UX research is a systematic and exploratory process that aims to explore users'
                    behaviour, needs, motivations and preferences
                </p>
            </>
        )
    }

    const MyAward = ({data})=>{

        return(
            <>
                {
                    data.map((item,index)=>{
                        return(
                            <div key={index}>
                                <h1 className="text-5xl font-semibold ">{item.number} </h1>
                                <p className="text-base mt-1 opacity-80 font-normal ">{item.title}</p>
                            </div>
                        )
                    })
                }
            </>


        )
    }


    return (
        <div  className="mt-[100px] summary-box ">
            <div className="max-w-[1150px] mx-auto py-8 grid grid-cols-3 gap-2 ">
                <div>
                    <Text />
                </div>
                <div className="col-span-2 flex flex-wrap justify-end items-center gap-10">
                    <MyAward data={AwadList} />
                </div>
            </div>
        </div>
    );
};

export default Summary;