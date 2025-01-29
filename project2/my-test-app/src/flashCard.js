// Data.js (or just keep this array in the main file)
const data = [
  { name: 'How much is food?', price: 1000 },
  { name: 'How much is JSX?', price: 500 },
  { name: 'How much is Test?', price: 300 },
];

// Card Component (Receives item as a prop)
function Card({ item }) {
  return <div className="card">{item.name}</div>;
}

// Main Component that renders the list
export default function FlashCardList() {
  return (
    <div className="flashCard">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}
