import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Card() {
  return (
    <main className="card">
      <h1> Stefanos Sophocleous Profolio Card </h1>
      <Profile
        name="Stefanos Sophocleous"
        age="24"
        bio="Full Stack Engineer looking to become the best version of myself in development"
        skills="JS/Typescript"
        photo="/photo.png"
      />
    </main>
  );
}
function Profile(props) {
  return (
    <div className="profile">
      <div>
        <img src={props.photo} />
        <h1>{props.name}</h1>
        <p> {props.bio} </p>
        <p> {props.age}</p>
        <p>{props.skills}</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
