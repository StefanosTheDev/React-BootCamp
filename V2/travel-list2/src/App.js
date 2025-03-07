import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import { PackingList } from './PackingList';
import { Stats } from './Stats';
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // new state depends on the old state. Destructure them. Because Props / stuff is immutable. so thie spread operatore can help here.
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // Step 1. Get current items sas its input.
    // Step 2 When item.id is =. Then that element will no longer be part of the final array.
    // A Way To Delete This stuff. So were filtering it out and setting the new state.
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items? '
    );
    if (confirmed) setItems([]);
  }
  // Great way to update everythign and return the Item Array back so we modify and return new array
  // Map array. how we update the item in the array. here is a great approach.
  function handleToggleItem(id) {
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
        onToggleItem={handleToggleItem}
        onClearLists={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
