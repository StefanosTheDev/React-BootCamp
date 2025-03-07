// The importance of the callback function. We dont want it to immediatly call it.
// WE want this to react can call the function only when the even thappens and we get the Item.id from the event.

export function Item({ item, onDeleteItem, onToggleItem }) {
  // Add it into a checkbox. Controleld Element. Is something to learn more. how to turn
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}> 🔴 </button>
    </li>
  );
}
