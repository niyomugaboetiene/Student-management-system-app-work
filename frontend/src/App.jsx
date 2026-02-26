import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InsertComponent from './pages/InsertComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <InsertComponent />
    </div>
  )
}

export default App
