import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
function App() {
  return (
    <div>
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza. </h1>
    </header>
  );
}
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizza/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizza/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizza/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizza/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizza/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizza/prosciutto.jpg',
    soldOut: false,
  },
];

// each time we write jsx it can only have one root element
function Menu() {
  // const pizzas = pizzaData;
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <p>
        Authenetic Italian Cusine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.{' '}
      </p>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on your menu. Please come back later.</p>
      )}
    </main>
  );
}

// Component as function needs to start wit upper case
function Pizza({ pizzaObj }) {
  // this can be a good technique if i want to just
  if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients}</p>
        <span> {pizzaObj.price + 3} </span>
      </div>
    </li>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open until {openHour}:00 to {closeHour}:00 Come visit us order
        online.
      </p>

      <button className="btn">Order</button>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert('Sorry were closed');

  // if Not Open
  if (!isOpen) return <p>CLOSED </p>;
  // Because isOpen is true. Now its Open. SHort Circuting Means if this condition is false. or falsey then the second part of the operation wont be executed.
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          Were happy to welcome you between {closeHour}:00 and {closeHour}: 00.
        </p>
      )}
    </footer>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
