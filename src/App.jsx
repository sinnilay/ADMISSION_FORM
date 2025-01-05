import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HEADER from './HEADER'
import MSG from './msg'
import S_name from './s_name'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <HEADER display={"block"} display2={"block"} display3={"hidden"} display4={"flex"} />
   <S_name />
   <MSG />
   </>
  )
}

export default App
