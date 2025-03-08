import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        background: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        padding: '20px',
      }}
    >
      <h1>React Global State Example</h1>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>

      <Section key={1} darkMode={darkMode} />
      <Section key={2} darkMode={darkMode} />
      <Section key={3} darkMode={darkMode} />
    </div>
  );
}

function Section({ darkMode }) {
  return (
    <div
      style={{
        margin: '10px',
        padding: '20px',
        background: darkMode ? '#444' : '#ddd',
      }}
    >
      <h2>Section</h2>
      <p>This section follows the global theme.</p>
    </div>
  );
}

export default App;
