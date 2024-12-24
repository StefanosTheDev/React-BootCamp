import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1> Hello World React</h1>
      <Pizza />
    </div>
  );
}

// Component as function needs to start wit upper case. and return
function Pizza() {
  return <h2> Pizza </h2>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
