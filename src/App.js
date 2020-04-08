/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Sabbir Pulok",
    age: 22,
    job: 'Full Stack Engineer'
  }
  var sty = {
    color: 'red',
    backgroundColor: 'yellow'
  }
  const products = [
    {name: 'Redmi Note 7 Pro', price:'22500'},
    {name: 'RealMe X2 Pro', price:'39200'},
    {name: 'P40', price:'49999'}
  ]
  const numbers = [2,5,11,19,5]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done<code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <p className="" style= {sty}>Name: {person.name}, Age: {person.age}</p>
        <p style={{backgroundColor:'cyan', color:'red'}}>{person.job}</p>
        <Hero name = "Robert Downey Jr." movie = "Zodiac"></Hero>
        <Hero name="Tom Hanks" movie="Forest Gump"></Hero>
        <Hero name="Leonardo DeCaprio" movie="Shutter Island"></Hero>
        
        <div style={{display:'flex',direction:'row'}}>
          {
            products.map(obj => <Product product={obj}></Product>)
          }       
        </div>
        <MouseListener></MouseListener>
        <Users></Users>
        <h3>Number List</h3>
        <ul>
          {
            numbers.map(num => <li>{num}</li>)
          }
          {
            products.map(obj => <li>{obj.name}</li>)
          }
        </ul>
       
      </header>
    </div>
  );
}

function Hero(props){
  const heroStyle = {
    backgroundColor:'cyan',
     border:'5px solid blue',
      borderRadius:'15px',
      padding:'18px',
      margin:'25px',
      height: '200px',
      width: '500px',
      wordWrap: 'break-word'
    
    }
  return( 
  <div style={heroStyle}>
    <h1>{props.name}</h1>
    <h3>{props.movie}</h3>
  </div>
  )  
}


function Product(props){
  const productStyle={
    border:'none',
    borderRadius:'15px',
    boxShadow: '5px 5px 8px lightgray',
    padding:'2px',
    margin:'25px',
    height: '200px',
    width: '350px',
    backgroundColor:'Chartreuse',
    color: 'DimGray',
    fontWeight:'800',
  }
  const {name,price} = props.product; //De-structuring
  return (
    <div style={productStyle}>
        <h4>{name}</h4>
        <h3>{price}</h3>
        <button>Buy Now</button>
    </div>
  )
 
}

function MouseListener()
{
   let [over,setOver] = useState(0)
   let [out,setOut] = useState(0)
   let [enter,setEnter] = useState(0)
   let [leave,setLeave] = useState(0)

  return(

      <div style={{height:'400px', width:'300px',backgroundColor:'blue',margin:'30px'}}
        onMouseEnter={() =>setEnter(enter+1)}
        onMouseLeave={() =>setLeave(leave+1)}
        onMouseOver={() =>setOver(over+1)}
        onMouseOut={() =>setOut(out+1)}>
        
        <p>Leave: {leave}</p>
        <p>Over: {over}</p>
        <p>Enter: {enter}</p>
        <p>Out: {out}</p>
       
        <div style={{height:'100px', width:'100px',backgroundColor:'red',marginLeft:'100px'}}>
          
        </div>
      </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Add to Cart
      </button>
      
      <button style={{marginLeft:'20px'}} onClick={()=>
        {
          if(count>0)
          {
            setCount(count-1)
          }
        }}>
        Remove from cart
      </button>
    </div>
  )
    
}

function Users()
{
  let [user,setUser] = useState([]) 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h2>Users</h2>
      <ul>
        {
          user.map(user=><li>{user.name}</li>)      
        }
      </ul>
      
      {
        console.log(user)
      }
    </div>
  )
}

export default App;
