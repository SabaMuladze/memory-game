const Menu = () => {
    return (
        <div className="bg-black bg-opacity-50 w-full h-screen absolute top-0 flex justify-center items-center md:hidden">
            <main className=" bg-white rounded-[10px] flex flex-col gap-6 p-6 opacity-100 max-md:w-[327px]">
                <button className="w-full py-3 bg-[#FDA214] rounded-3xl ">Restart</button>
                <button className="text-[#304859] w-full py-3 bg-[#DFE7EC] rounded-3xl ">New Game</button>
                <button className="text-[#304859] w-full py-3 bg-[#DFE7EC] rounded-3xl ">Resume</button>

            </main>
        </div>
    )
}

export default Menu 