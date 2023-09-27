import { Link, useLocation } from "react-router-dom"
import Menu from "./Menu"
import { useEffect, useState } from "react"
import Grid from "./Grid"
import Solo from "./Solo"
import Multiplayer from "./Multiplayer"


const Game = () => {
    const [index, setIndex] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    const [point, setPoint] = useState(0)
    const [point2, setPoint2] = useState(0)
    const [point3, setPoint3] = useState(0)
    const [point4, setPoint4] = useState(0)

    const menuHandler = () => {
        setShowMenu(!showMenu)
    }
    const locations = useLocation()
    const searchParams = new URLSearchParams(locations.search);
    const theme = searchParams.get('theme')
    const playerNum = searchParams.get('playerNum')
    const gridSize = searchParams.get('gridSize')
    const symbolsData = [
        {
            content: ["🌟", "🍎", "🍉", "🍕", "🍔", "🍟", "🍦", "🍭"],
        },
        {
            content: ["🌟", "🍎", "🍉", "🍕", "🍔", "🍟", "🍦", "🍭", "🚀", "🎈", "🎉", "🎁", "🎂", "🎮", "🎸", "🎺", '🐱‍🚀', '🐱‍🐉'],

        }
    ]

    const numsData = [
        {
            content: ['1', '2', '3', '4', '5', '6', '7', '8']
        },
        {
            content: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18']
        }
    ]
    const [time, setTime] = useState({ s: 0, m: 0 })
    const start = () => {
        // runs();
        setInterval(runs, 1000)

    }

    const [moves, setMoves] = useState(0)

    let updatedS = time.s, updatedM = time.m
    const runs = () => {
        if (updatedS == 60) {
            updatedS = 0
            updatedM++
        }
        if (updatedM == 60) {
            updatedM = 60

        }
        updatedS++
        return setTime({ s: updatedS, m: updatedM })
    }

    return (
        <div className="flex flex-col justify-between min-h-screen pb-5">
            <header className="flex justify-between pt-7 px-6 items-center md:px-10 lg:px-[170px] lg:pt-16">
                <h2 className="">memory</h2>
                <button onClick={menuHandler} className="px-5 py-2 bg-[#FDA214] rounded-3xl md:hidden ">Menu</button>
                <div className="max-md:hidden flex gap-4">
                    <button onClick={(e) => location.reload()} className="px-5 py-2 bg-[#FDA214] rounded-3xl hover:opacity-75">Restart</button>
                    <Link to={'/setup'}><button className="px-5 py-2 bg-[#DFE7EC] rounded-3xl text-[#304859] hover:bg-[#6395B8] hover:text-[white]">New Game</button></Link>
                </div>
            </header>
            {showMenu == true ? <Menu setShowMenu={setShowMenu} /> : null}
            <main className="max-md:px-6">
                <Grid start={start} gridSize={gridSize} themeData={theme == 'Numbers' ? numsData : symbolsData} setMoves={setMoves} moves={moves} time={time} setPoint={{ setPoint: setPoint, setPoint2: setPoint2, setPoint3: setPoint3, setPoint4: setPoint4 }} point={{ point: point, point2: point2, point3: point3, point4: point4 }} indexs={index} setIndex={setIndex} />
            </main>
            <footer className="px-6 w-full flex justify-center">
                {playerNum == 1 ? <Solo time={time} moves={moves} /> : null}
                {playerNum > 1 ? <Multiplayer time={time} moves={moves} playerNum={playerNum} point={{ point: point, point2: point2, point3: point3, point4: point4 }} index={index} setIndex={setIndex} /> : null}
            </footer>
        </div>
    )
}

export default Game