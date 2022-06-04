import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { increment,
         decrement, 
         reset, 
         incrementByAmount
       } from './counterSlice';

import { useState } from 'react';


const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    
    //we declare a useState to track our local state of incrementByAmount
    const [incrementAmount, setIncrementAmount]=useState(0)

    //this function ensures that what ever value we include is a number.
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
    <section>
        <div>
            <button onClick={() => dispatch(increment())}> + </button>
            <button onClick={() => dispatch(decrement())}> - </button>
            {count}
        </div>
        <input type="text" 
               value={incrementAmount}
               onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={resetAll}>Reset</button>
        </div>
        
    </section>
  )
}

export default Counter
