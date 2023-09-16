import { useState, useEffect } from "react"

const Grid = ({ gridSize, themeData }) => {
    const symbols = gridSize == 16 ? themeData[0].content : themeData[1].content

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);

    useEffect(() => {
        const initialCards = symbols.concat(symbols);
        shuffleArray(initialCards);
        setCards(initialCards);
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const handleCardClick = (index) => {
        if (flippedCards.length === 2) {
            return;
        }

        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
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
        <div className="flex justify-center max-md:mt-20 md:mt-32">
            <div className={gridSize == 16 ? 'grid grid-cols-4 gap-5 place-items-center w-full max-w-[600px]' : 'grid grid-cols-6 gap-5  max-w-[600px]'}>
                {cards.map((symbol, index) => (
                    <div
                        key={index}
                        className={gridSize == 16 ? `card md:h-28 md:w-28 max-md:h-[72px] max-md:w-[72px]   ${isCardFlipped(index) ? 'flipped' : ''}` : `card md:h-20 md:w-20 max-md:h-[50px] max-md:w-[50px]   ${isCardFlipped(index) ? 'flipped' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        {isCardFlipped(index) ? symbol : ''}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Grid

