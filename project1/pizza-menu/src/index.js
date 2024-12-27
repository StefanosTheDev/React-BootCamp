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
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} /> // name in this case is unique (our key)
        ))}
      </ul>

      {/* 
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, Mozarella, Spinach, and Ricotta Cheese"
        photoName="pizza/spinaci.jpg"
        price={10} // way to enter a number
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato Mushrooms, Salsa"
        price={100}
        photoName="pizza/funghi.jpg"
      /> */}
    </main>
  );
}

// Component as function needs to start wit upper case. and return
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p> {props.pizzaObj.ingredients}</p>
        <span> {props.pizzaObj.price + 3} </span>
      </div>
    </li>
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

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} We're currently open{' '}
    </footer>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
