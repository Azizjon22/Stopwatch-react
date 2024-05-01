import React, { useEffect, useState } from 'react'
import './app.css'

const App = () => {
  const [time, setTime] = useState(0)
  const [runinng, setRunning] = useState(false)

  
  useEffect( () => {
    let interval;
    if(runinng){
      interval =setInterval(() =>{
        setTime((preavTime) => preavTime + 10)
      },10);
    }else if (!runinng){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[runinng])


  return (
    <>
    <div className='container'>

   <div className='Count-secund'>
   <h1>Stopwatch</h1>
    <div>
      <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span> 
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    </div>
    <div className='Count-secund-button'>
      {runinng ? (<button className='btn2' onClick={() =>{setRunning(false)}}>Stop</button>): (<button className='btn1' onClick={() =>{setRunning(true)}}>Start</button>)}
      <button className='btn3' onClick={() =>{setTime(0)}}>Reset</button>
    </div>
   </div>

    </div>
    </>
  )
}

export default App