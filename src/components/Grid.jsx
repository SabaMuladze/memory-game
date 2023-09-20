import { useState, useEffect } from "react"
import Multiplayer from "./Multiplayer";

const Grid = ({ gridSize, themeData, start, setMoves }) => {
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
    return (
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
    );
}

export default Grid

