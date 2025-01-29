import { useState } from 'react';

const data = [
  { name: 'How much is food?', price: 1000 },
  { name: 'How much is JSX?', price: 500 },
  { name: 'How much is Test?', price: 300 },
];

export default function FlashCardList() {
  const [flippedIndex, setFlippedIndex] = useState(null); // Track which card is flipped

  const handleFlip = (index) => {
    // If the same card is clicked again, reset it
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  return (
    <div className="flashCard">
      {data.map((item, index) => (
        <Card
          key={index}
          item={item}
          isFlipped={flippedIndex === index} // Check if this card is flipped
          onFlip={() => handleFlip(index)} // Pass down click handler
        />
      ))}
    </div>
  );
}
function Card({ item, isFlipped, onFlip }) {
  return (
    <div>
      <button className="card" onClick={onFlip}>
        {isFlipped ? `$${item.price}` : item.name}
      </button>
    </div>
  );
}
