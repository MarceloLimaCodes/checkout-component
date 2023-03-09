import { useState } from 'react'

import { CheckOut } from './components/CheckOut'
import { CardProduto } from './components/CardProduto'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CheckOut />
      <CardProduto />
    </div>
  )
}
