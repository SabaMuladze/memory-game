import { Link, Navigate, useNavigate } from "react-router-dom"
import Game from './Game'
import { useState } from "react"

const GameSet = () => {
    const [theme, setTheme] = useState('Numbers')
    const [playerNum, setPlayerNum] = useState(1)
    const [gridSize, setGridSize] = useState(16)
    const navigate = useNavigate()

    const sendInformation = () => {
        if (theme && playerNum && gridSize) {
            navigate(`/game?theme=${theme}&playerNum=${playerNum}&gridSize=${gridSize}`)
        }
    }

    return (
        <section className="bg-[#152938] w-full h-screen flex flex-col items-center px-6">
            <h1 className="mb-[60px] mt-20 md:mt-[169px]">memory</h1>
            <main className=" bg-white rounded-[10px] flex flex-col gap-6 p-6 max-md:w-full md:w-[655px] md:p-[56px]">
                <div>
                    <p className="pb-3 text-[#7191A5]">Select Theme</p>
                    <div className="flex gap-3">
                        <button onClick={() => setTheme('Numbers')} className={`py-[10px] w-[50%]  rounded-3xl hover:bg-[#6395B8] ${theme == "Numbers" ? "active" : "bg-[#BCCED9]"}`}>Numbers</button>
                        <button onClick={() => setTheme('Icons')} className={`py-[10px] w-[50%]  rounded-3xl hover:bg-[#6395B8] ${theme == "Icons" ? "active" : "bg-[#BCCED9]"}`}>Icons</button>
                    </div>
                </div>
                <div>
                    <p className="pb-3 text-[#7191A5]">Numbers of Players</p>
                    <div className="flex gap-3 justify-center">
                        <button onClick={() => setPlayerNum(1)} className={`py-[10px] w-[25%] bg-[#BCCED9] rounded-3xl hover:bg-[#6395B8] ${playerNum == 1 ? "active" : "bg-[#BCCED9]"}`}>1</button>
                        <button onClick={() => setPlayerNum(2)} className={`py-[10px] w-[25%] bg-[#BCCED9] rounded-3xl hover:bg-[#6395B8] ${playerNum == 2 ? "active" : "bg-[#BCCED9]"}`}>2</button>
                        <button onClick={() => setPlayerNum(3)} className={`py-[10px] w-[25%] bg-[#BCCED9] rounded-3xl hover:bg-[#6395B8] ${playerNum == 3 ? "active" : "bg-[#BCCED9]"}`}>3</button>
                        <button onClick={() => setPlayerNum(4)} className={`py-[10px] w-[25%] bg-[#BCCED9] rounded-3xl hover:bg-[#6395B8] ${playerNum == 4 ? "active" : "bg-[#BCCED9]"}`}>4</button>
                    </div>

                </div>
                <div>
                    <p className="pb-3 text-[#7191A5]">Grid Size</p>
                    <div className="flex gap-3">
                        <button onClick={() => setGridSize(16)} className={`py-[10px] w-[50%] bg-[#BCCED9] rounded-3xl hover:bg-[#6395B8] ${gridSize == 16 ? "active" : "bg-[#BCCED9]"} `}>4x4</button>
                        <button onClick={() => setGridSize(36)} className={`py-[10px] w-[50%] bg-[#BCCED9] rounded-3xl hover:bg-[#6395B8] ${gridSize == 36 ? "active" : "bg-[#BCCED9]"}`}>6x6</button>
                    </div>
                    <button onClick={sendInformation} className="w-full py-3 bg-[#FDA214] rounded-3xl mt-8">Start Game</button>
                </div>
            </main>
        </section>
    )
}

export default GameSet


