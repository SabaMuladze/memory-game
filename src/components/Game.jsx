import { Link } from "react-router-dom"
import Menu from "./Menu"
import { useState } from "react"

const Game = () => {
    const [showMenu, setShowMenu] = useState(false)

    const menuHandler = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            <header className="flex justify-between pt-7 px-6 items-center md:px-10 lg:px-[170px] lg:pt-16">
                <h2 className="">memory</h2>
                <button onClick={menuHandler} className="px-5 py-2 bg-[#FDA214] rounded-3xl md:hidden ">Menu</button>
                <div className="max-md:hidden flex gap-4">
                    <button onClick={(e) => location.reload()} className="px-5 py-2 bg-[#FDA214] rounded-3xl ">Restart</button>
                    <button className="px-5 py-2 bg-[#DFE7EC] rounded-3xl text-[#304859] "><Link to={'/setup'}>New Game</Link></button>
                </div>
            </header>
            {showMenu == true ? <Menu setShowMenu={setShowMenu} /> : null}
        </>
    )
}

export default Game