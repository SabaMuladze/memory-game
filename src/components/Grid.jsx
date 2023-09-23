import { useState, useEffect } from "react"
import Multiplayer from "./Multiplayer";
import { Link } from "react-router-dom";

const Grid = ({ gridSize, themeData, start, setMoves, moves, time }) => {
    const symbols = gridSize == 16 ? themeData[0].content : themeData[1].content

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };
    useEffect(() => {
        const initialCards = symbols.concat(symbols);
        shuffleArray(initialCards);
        setCards(initialCards);
    }, []);

    useEffect(() => {
        return () => {
            clearInterval(start())
        }
    }, [])


    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || isCardFlipped(index)) {
            return;
        }
        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            setMoves(prev => prev + 1)
            const [firstIndex, secondIndex] = newFlippedCards;
            if (cards[firstIndex] === cards[secondIndex]) {
                setMatchedPairs([...matchedPairs, cards[firstIndex]]);
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };
    const isCardFlipped = (index) => {
        return flippedCards.includes(index) || matchedPairs.includes(cards[index]);
    };
    const finalModal = gridSize == 16 ? 8 : 18;
    return (
        <>
            <div className="flex justify-center mt-20 mb-10">
                <div className={gridSize == 16 ? 'grid grid-cols-4 gap-5 place-items-center w-full max-w-[600px]' : 'grid grid-cols-6 gap-4  max-w-[600px]'}>
                    {cards.map((symbol, index) => (
                        <div
                            key={index}
                            className={gridSize == 16 ? `card md:h-28 md:w-28 max-md:h-[72px] max-md:w-[72px] cursor-pointer rotate-0  ${isCardFlipped(index) ? 'flipped' : ''}` : `card md:h-20 md:w-20 max-md:h-[50px] max-md:w-[50px] cursor-pointer ${isCardFlipped(index) ? 'flipped' : ''}`}
                            onClick={() => handleCardClick(index)}
                            style={`${isCardFlipped(index)}` ? { transform: 'rotateY(360deg)', transition: '0.1s' } : ' '}
                        >
                            <p className="pointer-events-none scale-[250%] text-white">{isCardFlipped(index) ? symbol : ''}</p>
                        </div>
                    ))}
                </div>
            </div >
            {
                matchedPairs.length == 3 ? <div className="bg-black bg-opacity-50 w-full min-h-screen absolute top-0 left-0 bottom-0 flex justify-center items-center z-50">
                    <main className="md:w-[650px] bg-white rounded-[10px] flex flex-col gap-6 p-6 opacity-100 max-md:w-[327px] md:p-14">
                        <div className=" text-center flex flex-col gap-2 mb-6">
                            <h2>You did it!</h2>
                            <p className="text-[#7191A5]">Game over! Here's how you got on…</p>
                        </div>
                        <div className="p-4 bg-[#DFE7EC] rounded-md flex justify-between">
                            <p>Time Elapsed</p>
                            <h3><span>{time.m}</span>:<span>{time.s >= 10 ? time.s : '0' + time.s}</span></h3>
                        </div>
                        <div className="p-4 bg-[#DFE7EC] rounded-md flex justify-between">
                            <p>Time elapsed</p>
                            <h3>{moves}</h3>
                        </div >
                        <div className="flex justify-between items-center gap-4">
                            <button onClick={(e) => location.reload()} className="px-5 py-2 w-[50%] bg-[#FDA214] rounded-3xl hover:opacity-75">Restart</button>
                            <Link className="w-[50%]" to={'/setup'}><button className="px-5 w-[100%] py-2 bg-[#DFE7EC] rounded-3xl text-[#304859] hover:bg-[#6395B8] hover:text-[white]">New Game</button></Link>
                        </div>
                    </main>
                </div> : null
            }
        </>
    );
}

export default Grid

