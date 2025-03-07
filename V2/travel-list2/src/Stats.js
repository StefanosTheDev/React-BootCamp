export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  // Early return as conditiona rendering
  if (!items.length)
    return (
      <p className="footer">
        <em> Start adding some items to the list </em>
      </p>
    );
  return (
    <footer>
      <em>
        {percentage === 100
          ? 'You got everything ready to go'
          : `You have ${numItems} items on your list. and you already have 
        ${numPacked} packed ${percentage}%`}
      </em>
    </footer>
  );
}
