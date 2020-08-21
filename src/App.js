import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Alamgir', 'Razzak', 'Sayem', 'OmarJani', 'Salam', 'Shovo']
  const products=[
    {name:'PhotoShop', price: '$56.78'},
    {name:'Illustrator', price: '$56.78'},
    {name:'PDF Reader', price: '$56.78'},
    {name:'EBooks', price: '$56.78'},

  ]
 // const nayokNames = nayoks.map(nayok => nayok)
  //console.log(nayokNames)
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li> )
          }
          {
            products.map(product => <li>{product.name}</li>)
            //products.map(product => <li>{product.price}</li>)
          }

          {
            products.map(pd => <Product product={pd}></Product> )
          }
          
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Code <code>src/App.js</code> and save to reload.
        </p>
  <p style={{color: 'red'}}>WelCome to New React World! {50*2}! </p>
     {/* <Product product={products[0]}></Product>
     <Product product={products[1]}></Product> */}
     <Users></Users>
     <Count></Count>
     <Person name="Imran Khan"></Person>
     <Person name="Erdugan"></Person>

     
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function Users() {
  const [users, setUers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(res => res.json())
    .then(data => setUers(data))
  }, [])
    return(
      <div>
        <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
          users.map(user =><p>{user.name}</p> )
          }
        </ul>
      </div>
    )
}
function Count(props) {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onMouseOver={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle={
    border:'1px solid orange',
    borderRadius: '5px',
    // float: 'left',
    textAlign: 'center',
    backgroundColor: 'gray',
    margin: '1px'
  }
  const {name, price} = props.product
  //console.log(name)
  return(
    <div style={productStyle}>
      <h1>Name: {name}</h1>
      <h3 style={productStyle}>Price: {price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  return  (
    <div style={personStyle}> 
        <h1 style={{color:'green'}}>Name: {props.name}</h1>
        <p style={personStyle}>The World Real Muslim Leader</p>
    </div>
  )
 
}



export default App;
