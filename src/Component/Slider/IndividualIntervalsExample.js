import React, { useState } from 'react';
import css from '../imagess/css.png';
import js from '../imagess/JS.png';
import java from '../imagess/Java.png';
import rea from '../imagess/react.png';
import pro from '../imagess/prob.png';
import wlm from '../imagess/wlm.jpg'

let arr = [css,js,java,rea,pro,wlm];
let ind = 0;
function IndividualIntervalsExample() {
  const[index,setIndex] = useState(ind);
  function preSide(){
    if(index > 1){
      setIndex(index => index-1);
    }
    else{
      setIndex(arr.length -1);
    }

  }
  function nextSide(){
    if(index < arr.length-1){
      setIndex(index => index + 1);
    }else{
      setIndex(0);
    }
  }
  return (
    <div className='main_con'>
      <h2> Certificate's </h2>
      <br />
      <div className='sec_con'>
        <img src={arr[index]} alt="" />
      </div>
      <div className='new__one'>
      <span className='pre' onClick={preSide}>pre</span>
      <span className='next' onClick={nextSide}>next</span>
      </div>
    </div>
  )
}

export default IndividualIntervalsExample
