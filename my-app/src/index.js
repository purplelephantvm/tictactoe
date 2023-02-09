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

const obj = {
    name: "Pook"
}

const element = (
    <h1>
    Hello, {formatName(user)}!
    {Welcome(obj)}
    </h1>
); // JSX assigned as varoable

function Welcome(props) { // a function component
    return <h1>Hello, {props.name}</h1>
}

root.render(element);

class WelcomeClass extends React.Component {
    render(){
        return (
        <h1> Hello, {this.props.name}</h1>
        )
    }
}

root.render(    <WelcomeClass name="Don Juan" />)
const element1 = <a href="https://www.reactjs.org"> Link </a>

// const element2 = <img src={}> </img>;

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