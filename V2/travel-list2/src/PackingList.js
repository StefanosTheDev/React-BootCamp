import { useState } from 'react';
import { Item } from './Item';

// Destructured. Passing it
export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearLists,
}) {
  const [sortBy, setSortBy] = useState('input');
  // We will use Derived State To Get The New Items For the Sorted
  let sortedItems;
  // Case 1
  if (sortBy === 'input') sortedItems = items;

  // use slice to mute
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    // Creating a new Item component every time and have a Item Prop
    // Watch how i do with the onchange.
    <div>
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order </option>

          <option value="description"> Sort by description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>

        <button onClick={onClearLists}> Clear List</button>
      </div>
    </div>
  );
}
