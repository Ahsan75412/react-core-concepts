
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const friends = [ 'habib' , 'umar', 'Zafor','Ahsan' , 'Mridul'];
  const products = [
    {name: 'Photoshop' , price:'90.99$'},
    {name: 'Illustrator' , price:'60$'},
    {name: 'PDF Reader' , price:'50$'},
    {name: 'PDf Nai' , price:'20$'},
    {name: 'PDf ase' , price:'20$'},
    {name: 'PDf course' , price:'10$'}

  ]
  console.log(products);
 

  return (
    <div className="App">
      <header className="App-header">
        <Counter> </Counter>
        <Users></Users>
        <ul>
        {
          friends.map(friend => <li>{friend}</li> )
        }
        {
            products.map(product => <li>{product.name}</li>)
        }

       
        
        </ul>
        
        {
          products.map(pd => <Product product={pd}></Product> )
        }
       
      </header>
    </div>
  );
}

function Counter(){
  const[count,setCount]=useState(10);
  const handelIncrease = () => setCount(count+1) ;  
  const handelDecrease = () => setCount(count-1) ;  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handelDecrease}>Decrease</button>
      <button onClick={handelIncrease}>Increase</button>

    </div>
  )
}

function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data) );
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadious: '5px',
    backgroundColor:'lightgray',
    height : '200px',
    width : '200px',
    float: 'left'

  }
  const {name , price} = props.product;
    return(
      <div style={productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    )
}