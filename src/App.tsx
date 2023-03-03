import { useState } from 'react'

import { CheckOut } from './components/CheckOut'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CheckOut />
    </div>
  )
}
