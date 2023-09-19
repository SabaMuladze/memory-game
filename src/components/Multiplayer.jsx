const Multiplayer = ({ time, moves, playerNum }) => {

    return (
        <>
            {playerNum == 2 ? <div className="flex gap-5 w-full  max-w-[600px]">
                <div className="w-[50%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 1</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
                <div className="w-[50%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 2</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
            </div> : null}
            {playerNum == 3 ? <div className="flex gap-5 w-full  max-w-[600px]">
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 1</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 2</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 1</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
            </div> : null}
            {playerNum == 4 ? <div className="flex gap-5 w-full lg:w-[80%]">
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 1</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 2</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 1</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
                <div className="w-[30%] relative flex flex-col items-center">
                    <span className="h-6 w-6 bg-[#FDA214] absolute top-[-10px] rotate-45 mx-auto"></span>
                    <div className="py-3 w-[100%] flex flex-col justify-center items-center bg-[#DFE7EC] rounded-md md:flex-row md:justify-between md:px-6 md:py-5">
                        <p className="text-[#7191A5]">Player 2</p>
                        <p className="text-3xl text-[#304859] flex items-center">0</p>
                    </div>
                </div>
            </div> : null}
        </>
    )
}

export default Multiplayer