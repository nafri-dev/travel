import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false ,},
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "charger", quantity: 1, packed: true },
  { id: 2, description: "Tws", quantity: 2, packed: false },
];



export default function App() {
  return (
    <div className='app'>
    <Logo />
    <Form />
    <PackingList/>
    <Stats />
    </div>

  )

   
};
function Logo(){
  return(
    <h1>Travel Prep</h1>
  )
}
function Form(){
  const[desc,setDesc]=useState("");
  const[quantity,setQuantity]=useState(6)


  function handleClick(e){
    e.preventDefault();

  }
  return(
    <div className='add-form' onSubmit={handleClick}>
      <h3>whats your need for the trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({length:10},(_,i)=> i+1).map((num)=>(
          <option value={num} key={num}>
            {num}
          </option>
        ))}

       
      </select>
      <input type="text" placeholder="....items" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      <button>add</button>
    </div>
  );
}
function PackingList(){
  return(
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <Item  item = {item}/>
        ))}
      </ul>
      </div>
  )
}
function Item({item}){
  return(
    <li><span style={item.packed ?{textDecoration:'line-through'}:{}}>
       {item.quantity} {item.description}
     

    </span>
    <button style={{color:'white'}}>x</button>
   
    
    </li>
  )

}
function Stats(){
  return(
    <footer className='stats'>
      you have x items on your list 
    </footer>
  )
}



