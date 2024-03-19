import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [amount, setAmount] = useState(0); // State for user input

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <input 
        type='number' 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Enter Amount'
        />
        <button 
        onClick={() => dispatch(incrementByAmount(amount))}
        >
        Increment By Amount
        </button>
      </div>
    </div>
  )
}