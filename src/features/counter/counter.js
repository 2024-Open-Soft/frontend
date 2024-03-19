// const counterReducer = (state = 0, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return state + 1;
//       case "DECREMENT":
//         return state - 1;
//       default:
//         return state;
//     }
//   };
  
//   export default counterReducer;

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

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
    </div>
  )
}