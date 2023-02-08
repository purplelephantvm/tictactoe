import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
// import Game from "./Game.js";
// import React from 'react';

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);

// const element = <h1>Hello, world</h1>;
// root.render(element);

function formatName(user) {
    return user.firstName + " " + user.lastName;
}

const user = {
    firstName: 'Ian',
    lastName: 'Yuen'
};

const element = (
    <h1>
    Hello, {formatName(user)}!
    </h1>
); // JSX assogmed as varoable

const element1 = <a href="https://www.reactjs.org"> Link </a>

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     root.render(element);
//   }
  
//   setInterval(tick, 1000);