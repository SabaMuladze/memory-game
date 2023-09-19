import { useEffect, useState } from "react"

const Solo = ({ time, moves }) => {


    return (
        <>
            <div className="flex gap-5 w-full  max-w-[600px]">
                <div className="py-3 w-[50%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                    <p className="text-[#7191A5]">Time</p>
                    <p className="text-3xl text-[#304859] flex items-center"><span>{time.m}</span>:<span>{time.s >= 10 ? time.s : '0' + time.s}</span></p>
                </div>
                <div className="py-3  w-[50%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between  md:px-6">
                    <p className="text-[#7191A5]">Moves</p>
                    <p className="text-3xl text-[#304859]">{moves}</p>
                </div>
            </div>
        </>
    )

}
export default Solo