import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const adobeProduct=[
  {name:'Adobe photoshop',amount: 'USD-19$'},
  {name:'Adobe Ilistutor' , amount: "USD-9$"},
  {name:'Adobe photoshop',amount: 'USD-19$'},
  {name:'Adobe Ilistutor' , amount: "USD-9$"},
  {name:'Adobe photoshop',amount: 'USD-19$'},
  {name:'Adobe Ilistutor' , amount: "USD-9$"}

 ]
 const hero = ['salman sah' , "manna" , "ilius k" , "bapparaz"];

  
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        {
          adobeProduct.map(pro => <Price descrip={pro}></Price>)
        }
        <ul>
          {
            hero.map(e => <li>{e}</li>)
          }
        </ul>
      </header>

    </div>
  );
}
function Price(props){
  const productStyle ={
    margin: '20px',
    backgroundColor: 'lightgray',
    padding: '12px',
    height: '250px',
    width: '500px',
    borderRadius: '7px',

  }
  const {name , amount} = props.descrip ;

  return(
    <div style={productStyle}>
      <p style={{color: 'blue' ,fontSize: '30px' , fontWeight: 'bold' , textShadow: '5px 5px lightblue'}}>Product Name : <span style={{color: "violet"}}> {name}</span></p>
      <h2 style={{color: 'teal'}}>Price: {amount} </h2>
      <button>buy now</button>
    </div>
  )
}

function Counter(){
  const [count , setCount] = useState(0);
  const handleIncrase =  () =>{
    const newCount = count + 1 ;
    setCount(newCount);
  }
  const handlDecrase = () =>{
    const newCount = count - 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>COUNT: {count}</h1>
      <button onMouseMove={handleIncrase}>incrase</button>
      <button onMouseOut={handlDecrase}>decrase</button>
    </div>
  )
}

function User(){
  const [user , setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  } , [])
  return <div>
    Dynamic User: {user.length}
    <ul>
      {
        user.map(element => <li>{element.email}</li>)
      }
    </ul>
  </div>
}

export default App;
