import React from 'react'
import { useValues, useActions } from 'kea'

import logic from './store'

const R1 = () => {
  const { counter } = useValues(logic)
  const { increment } = useActions(logic)
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <br />
      <h3>{counter}</h3>
    </div>
  )
}
export default R1