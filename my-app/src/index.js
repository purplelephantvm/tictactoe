import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
// import Game from "./Game.js";
// import React from 'react';

import {useState} from "react";
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
//     root.render(element); //not good practice, but illustrates render
//   }
  
//   setInterval(tick, 1000);


// using state
class Clock extends React.Component {

    constructor(props){ //class components always call base constructor with props
        super(props);
        this.state= {
            date: new Date(),
            counter: 1
        }; //0: assign initial state
    }

    //life cycle methods
    componentDidMount(){ //runs after component output rendered to DOM
        this.timerID = setInterval(
            () => this.tick(), //2: runs this at rendered
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date() // 3: updates the date, which then re-renders, cycles
        });
        
        this.setState({counter: this.state.counter + 1});

        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }))

    }

    render() { //1: render/updates the DOM
        return (
            <div>
                <h1>Hello, Pook!</h1>
                <h2> It is {this.state.date.toLocaleTimeString()}</h2>
                {this.setState({comment: 'Hello'})}
                <h3> {this.state.comment} {this.state.counter}</h3>
                <div>
                    <Form />
                </div>
            </div>
        )
    }
}

root.render(<Clock increment={2}/>);

function Form() {

    const [counter, setCounter] = useState(1);

    function handleSubmit(e){
        e.preventDefault();
        console.log("Submit clicked!")
        setCounter(counter+1);
    }

    // this.setCounter = this.setCounter.bind(this);

    // this.handleSubmit = this.handleSubmit.bind(this);

    return ( //note the second one is not bound, thus interferes with top level counter variable
    //there is no binding as was tried in 131, 133, because it is a functional component
    //https://stackoverflow.com/questions/44478809/why-do-functional-component-in-reactjs-not-have-instances
        <div>
            <form onSubmit={handleSubmit}>
                <button type="submit">Submit {counter} </button>
            </form>
            <form onSubmit={() => setCounter(counter+1)}> 
                <button type="submit">Submitz {counter} </button>
            </form>            
        </div>
        
    )
}