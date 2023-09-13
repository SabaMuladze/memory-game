const GameSet = () => {
    return (
        <section className="bg-[#152938] w-full h-screen flex flex-col items-center px-6">
            <h1 className="mb-[60px] mt-20">memory</h1>
            <main className=" bg-white rounded-[10px] flex flex-col gap-6 p-6 max-md:w-full md:w-[655px]">
                <div>
                    <p className="pb-3">Select Theme</p>
                    <div className="flex gap-3">
                        <button className="py-[10px] w-[50%] bg-[#BCCED9] rounded-3xl">Numbers</button>
                        <button className="py-[10px] w-[50%] bg-[#BCCED9] rounded-3xl">Icons</button>
                    </div>
                </div>
                <div>
                    <p className="pb-3">Numbers of Players</p>
                    <div className="flex gap-3 justify-center">
                        <button className="py-[10px] w-[25%] bg-[#BCCED9] rounded-3xl">1</button>
                        <button className="py-[10px] w-[25%] bg-[#BCCED9] rounded-3xl">2</button>
                        <button className="py-[10px] w-[25%] bg-[#BCCED9] rounded-3xl">3</button>
                        <button className="py-[10px] w-[25%] bg-[#BCCED9] rounded-3xl">4</button>
                    </div>

                </div>
                <div>
                    <p className="pb-3">Grid Size</p>
                    <div className="flex gap-3">
                        <button className="py-[10px] w-[50%] bg-[#BCCED9] rounded-3xl">4x4</button>
                        <button className="py-[10px] w-[50%] bg-[#BCCED9] rounded-3xl">6x6</button>
                    </div>
                    <button className="w-full py-3 bg-[#FDA214] rounded-3xl mt-8">Start Game</button>
                </div>
            </main>
        </section>
    )
}

export default GameSet