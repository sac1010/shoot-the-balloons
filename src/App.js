import logo from './logo.svg';
import './App.css';
import Balloons from './components/Balloons';
import { useEffect, useState } from 'react';

function App() {
  
  const [balloons, setBalloons] = useState([])
  const [added, setAdded] = useState([])
  const [shootNum, setShootNum] = useState("")

  const colorGen = ()=>{
    let arr = []
    for(let i=1; i<=5; i++){
      arr.push([`#${Math.floor(Math.random()*16777215).toString(16)}`, i])
    }
    setBalloons(arr)
  }

  useEffect(()=>{
    colorGen()
  }, [])

  const handleClick = ()=>{
   let balloon = balloons.find((el)=>el[1]==shootNum)
   if(!balloon){
     alert("please enter a valid number")
     return
   }
   const newArr = balloons.filter((el)=>el[1]!=shootNum)
   setBalloons([...newArr])
   setAdded([...added, balloon])
  }

  return (
    <div className="app">
      <div className="main">
        {balloons.map((el)=><Balloons color={el[0]} num={el[1]}></Balloons>)}
      </div>
      <div className="empty" style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
      {added.map((el)=><Balloons color={el[0]} num={el[1]}></Balloons>)}
      </div>
      <div className="shoot">
          <input onChange={(e)=>setShootNum(e.target.value)} type="number" />
          <button onClick={handleClick}>shoot</button>
      </div>
    </div>
  );
}

export default App;
