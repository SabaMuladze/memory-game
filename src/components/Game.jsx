import { Link } from "react-router-dom"
import Menu from "./Menu"
import { useState } from "react"

const Game = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <header className="flex justify-between pt-7 px-6 items-center">
                <h2 className="">memory</h2>
                <button className="px-5 py-2 bg-[#FDA214] rounded-3xl ">Menu</button>
            </header>
            <Menu />
        </>
    )
}

export default Game