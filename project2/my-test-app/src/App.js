import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button CLicked');
  };

  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={handleClick} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Data />
        <ProductList products={products} />

        <WelcomeMessage loggedIn={true} name="Alice" />
        <WelcomeMessage loggedIn={false} name="BOB" />
      </header>
    </div>
  );
}

/**
 *  Relationship beteween this. Data() and UserCard
 * Data() the parent componenet -- it has all the data (names and ages)
 * UserCard () the child component -- it uses the data provided by the parent to display information
 *
 */
export function UserCard(props) {
  return (
    <div>
      <h2> name: {props.name}</h2>
      <p> Age: {props.age} </p>
    </div>
  );
}

export function Data() {
  return (
    <div>
      <UserCard name="Alice" age={25} />
      <UserCard name="Bob" age={30} />
    </div>
  );
}

// Conditional Rendering in JSX
// If a user is logged in props is ture.  if someone is false. then not logged in
function WelcomeMessage(props) {
  return (
    <div>
      {props.loggedIn ? (
        <h1> Welcome back, {props.name}!</h1>
      ) : (
        <h1> Please log in </h1>
      )}
    </div>
  );
}

// Passing Functions as Props
// Problem create a button componeent that triggers a function passe da prop when clicked

function Button(props) {
  return <button onClick={props.onClick}>Click me</button>;
}

// Create a produtList componenet that renders a list of products (name & price) using the map() function

function ProductList(props) {
  return (
    <div>
      {props.products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
export default App;

// Challenges For Practice
// Problem 1:
/**
 * Component Composition:

Create a parent component that renders multiple child components.
Example: A Dashboard component that renders a Header, Sidebar, and MainContent.
 */
