import { useState } from 'react';
import { Logo } from './logo';
import { Form } from './Form';
import { PackingList } from './PackingList';
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items'
    );
    if (confirmed) {
      setItems([]);
    }
  }
  //?? Stef
  function handleToggleItem(id) {
    // this is how we update an objec tin an array.
    // Set items means in this case. Loop through the item array. I fthe ID of the ITEm matches the ID passe din
    // Create a new object with the contents of the item, then the packed result is invereted with the ! symbol.
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>XXX</button>
    </li>
  );
}

function Stats({ items }) {
  // Early return as conditional rendering
  if (!items.length)
    return (
      <p className="footer">
        <em>start adding items to your packing list</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go'
          : `You have Already ${numPacked} ${percentage} on your list, and you already
        packed x (X%)`}
      </em>
    </footer>
  );
}
