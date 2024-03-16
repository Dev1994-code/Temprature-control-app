import React, { useState } from 'react'

function App() {

    const [tempratureValue, setTempratureValue] = useState(10);
    const [tempratureColor, setTempratureColor] =useState('cold');


    const increaseTemprature = () => {

        if(tempratureValue === 30) return;

        const newTemprature = tempratureValue +1;

        if(newTemprature >= 15) {
            setTempratureColor('hot');
        }
        setTempratureValue(newTemprature);
    }


    const decreaseTemprature = () => {

         if(tempratureValue === 0) return;

        const newTemprature = tempratureValue -1;
        

        if(newTemprature < 15) {
            setTempratureColor('cold');
        }
        setTempratureValue(newTemprature);
    }
   
  
  return (
    <div className='app-container'>
        <div className='temperature-display-container'>
            <div className={`temperature-display ${tempratureColor}`}>{tempratureValue}°C</div>
        </div>
        <div className='button-container'>
            <button onClick={() => decreaseTemprature()}>-</button>
            <button onClick={() => increaseTemprature()}>+</button>
        </div>
    </div>
  )
}

export default App;




/*const age = 28;
  const message = `my age is ${age}`
  alert(message);
  
  <button onClick = {() => setTempratureValue(tempratureValue + 1)}>+</button>
  */






 /* import React, { useState } from 'react';

function App() {

    const [tempratureValue, setTempratureValue] = useState(10);
    const [tempColor, setTempColor] = useState("cold")

    function increaseTempValue() {
       
        if(tempratureValue === 30) return;

        const newTemp = tempratureValue + 1;
        setTempratureValue(newTemp);

        if(newTemp >= 15) {
            setTempColor("hot");
        }
    }

    function decreaseTempValue() {

        if(tempratureValue === 0) return;

        const newTemp = tempratureValue - 1;
        setTempratureValue(newTemp);

        if(newTemp < 15) {
            setTempColor("cold");
        }
        
    }

    return (
        <div className='app-container'>
            <div className='temperature-display-container'>
               <div className={`temperature-display ${tempColor}`}>{tempratureValue}°C</div> 
            </div>
            <div className='button-container'>
                <button onClick = {()=> decreaseTempValue()}>-</button>
                <button onClick = {()=> increaseTempValue()}>+</button>
            </div>
        </div>
    )
}

export default App;*/
