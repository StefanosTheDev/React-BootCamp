import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: true },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> **Far Away</h1>;
}

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // This prevents reload.. The Event object is the E. From Handlesubmit. this iswhat were working with
    if (!description) return;
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // Controlled Elements allow usto keep our components statew itht hese dOm form elements
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    // Creating a new Item component every time and have a Item Prop
    <div>
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button> 🔴 </button>
    </li>
  );
}
function Stats() {
  return (
    <footer>
      <em> You have X items on your list. And you already packed X (X%)</em>
    </footer>
  );
}
