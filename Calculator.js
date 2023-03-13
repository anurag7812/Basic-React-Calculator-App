import './App.css';
import React,{useState} from 'react';
// import LoginPage from './LoginPage';
// import SignUp from './SignUp';
const Calculator=()=> {
  // const display="display";
  const [screen, setScreen] = useState("");
  const handleScreenAfterButtonClick=(value)=>{
    setScreen(screen+value);
    console.log(value + "   pressed");
  }
//   const createDigits=()=>{
//     const digit=[];
//     for(let i=0 ; i< 10;i++){
//       digit.push(
//         <button key ={ i } className='buttonArrange'>{i}</button>
//       )
//     }
//     return digit;
// }
const handleDeleteAtScreen=()=>{
  console.log("deleted");
  const value=screen.slice(0,-1);
  setScreen(value);
  // can use slice method to reove last element 
  // slice method creates a new short array 
  // slice(start,end);
  // end is not included 
  //  and 
  //  index->0,1,2,3,4
  //                 -2,-1<-index

  //           always move to right side 
}
const handleDeleteAllAtScreen=()=>{
  console.log("delete All Working");
  const len=screen.length;
  console.log(len);
  const value=screen.slice(len);
  setScreen(value);
}
const calculate = () => {
  setScreen(eval(screen).toString());
}

  return (
    <div className="signup-container" >
      <div className='screen'>
          {screen}      
      </div>
     
      
      
    <div className='rowArrange'>
      <button onClick={()=>handleScreenAfterButtonClick('1')} className='buttonArrange'>1</button>
      <button onClick={()=>handleScreenAfterButtonClick('2')} className='buttonArrange'>2</button>
      <button onClick={()=>handleScreenAfterButtonClick('3')} className='buttonArrange'>3</button>
      <button onClick={()=>handleScreenAfterButtonClick('4')} className='buttonArrange'>4</button>
    </div>
    <div className='rowArrange'>
      <button onClick={()=>handleScreenAfterButtonClick('5')} className='buttonArrange'>5</button>
      <button onClick={()=>handleScreenAfterButtonClick('6')} className='buttonArrange'>6</button>
      <button onClick={()=>handleScreenAfterButtonClick('7')} className='buttonArrange'>7</button>
      <button onClick={()=>handleScreenAfterButtonClick('8')} className='buttonArrange'>8</button>
    </div>
    <div className='rowArrange'>
      <button onClick={()=>handleScreenAfterButtonClick('9')} className='buttonArrange'>9</button>
      <button onClick={()=>handleScreenAfterButtonClick('*')} className='buttonArrange'>*</button>
      <button onClick={()=>handleScreenAfterButtonClick('/')} className='buttonArrange'>/</button>
      <button  onClick ={()=>handleDeleteAtScreen()} className='buttonArrange' >C</button>

    </div>
    <div className='rowArrange'>
      <button  onClick ={()=>calculate()} className='buttonArrange' >=</button>
      <button onClick={()=>handleScreenAfterButtonClick('+')} className='buttonArrange'>+</button>
      <button onClick={()=>handleScreenAfterButtonClick('-')} className='buttonArrange'>-</button>
      <button  onClick ={()=>handleDeleteAllAtScreen()} className='buttonArrange' >Delete All</button>
    </div>
    
    </div>
  );
};
export default Calculator;
