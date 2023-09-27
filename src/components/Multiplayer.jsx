import { useEffect, useRef, useState } from "react"

const Multiplayer = ({ time, moves, playerNum, point, index, setIndex }) => {
    const plrf = useRef(0)
    const plrf1 = useRef(0)
    const plrf2 = useRef(0)
    const plrf3 = useRef(0)

    useEffect(() => {
        const intervalId = setInterval(multiFunc, 500);
        return () => clearInterval(intervalId);

    })

    const multiFunc = () => {
        if (playerNum == 2) {
            if (index == 0) {
                plrf.current.style.backgroundColor = 'black';
                plrf1.current.style.backgroundColor = '#DFE7EC';

            }
            else if (index == 1) {
                plrf.current.style.backgroundColor = '#DFE7EC';
                plrf1.current.style.backgroundColor = 'black';
            }
            else {
                setIndex(0)
            }
        }
        if (playerNum == 3) {
            if (index == 0) {
                plrf.current.style.backgroundColor = 'black';
                plrf1.current.style.backgroundColor = '#DFE7EC';
                plrf2.current.style.backgroundColor = '#DFE7EC';
            }
            else if (index == 1) {
                plrf.current.style.backgroundColor = '#DFE7EC';
                plrf2.current.style.backgroundColor = '#DFE7EC';
                plrf1.current.style.backgroundColor = 'black';
            }
            else if (index == 2) {
                plrf.current.style.backgroundColor = '#DFE7EC';
                plrf2.current.style.backgroundColor = 'black';
                plrf1.current.style.backgroundColor = '#DFE7EC';
            }
            else {
                setIndex(0)
            }
        }
        if (playerNum == 4) {
            if (index == 0) {
                plrf.current.style.backgroundColor = 'black';
                plrf1.current.style.backgroundColor = '#DFE7EC';
                plrf2.current.style.backgroundColor = '#DFE7EC';
                plrf3.current.style.backgroundColor = '#DFE7EC';

            }
            else if (index == 1) {
                plrf.current.style.backgroundColor = '#DFE7EC';
                plrf2.current.style.backgroundColor = '#DFE7EC';
                plrf1.current.style.backgroundColor = 'black';
                plrf3.current.style.backgroundColor = '#DFE7EC';

            }
            else if (index == 2) {
                plrf.current.style.backgroundColor = '#DFE7EC';
                plrf2.current.style.backgroundColor = 'black';
                plrf1.current.style.backgroundColor = '#DFE7EC';
                plrf3.current.style.backgroundColor = '#DFE7EC';

            }
            else if (index == 3) {
                plrf.current.style.backgroundColor = '#DFE7EC';
                plrf2.current.style.backgroundColor = '#DFE7EC';
                plrf1.current.style.backgroundColor = '#DFE7EC';
                plrf3.current.style.backgroundColor = 'black';

            }
            else {
                setIndex(0)
            }
        }
    }


    return (
        <>
            {playerNum == 2 ? <div className="flex gap-5 w-full  max-w-[600px]">
                <div className="w-[50%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 1</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point}</p>
                    </div>
                </div>
                <div className="w-[50%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf1} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 2</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point2}</p>
                    </div>
                </div>
            </div> : null}
            {playerNum == 3 ? <div className="flex gap-5 w-full  max-w-[600px]">
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 1</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point}</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf1} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 2</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point2}</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf2} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 3</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point3}</p>
                    </div>
                </div>
            </div> : null}
            {playerNum == 4 ? <div className="flex gap-5 w-full lg:w-[80%]">
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 1</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point}</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf1} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 2</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point2}</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf2} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 3</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point3}</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div ref={plrf3} className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 4</p>
                        <p className="text-3xl text-[#304859] flex items-center">{point.point4}</p>
                    </div>
                </div>
            </div> : null}
        </>
    )
}

export default Multiplayer