import React from 'react'
import logo from './logo.svg';
import './App.css';


function RandomNum() {
  const numList = [0,1,2,3,4,5,6,7,8,9]
  const randomList = [];
    for(let i =0; i<4; i++){
      const choosenNum = numList.indexOf(Math.floor(Math.random()*10))
      randomList.push(choosenNum);
    }
    return randomList;  
} 


function Test(input, arr){
  const answer = Array.prototype.reduce.call(input, (acc,current) => {
    
}




function App() {
    return (
    <>
      <RandomNum />
      <Test />
      <div>test</div>
      <form>
      <input value = ""/>
        <button>입력!</button>
      </form>
      <div>{Test}</div>
      </>
  );
}

export default App;
