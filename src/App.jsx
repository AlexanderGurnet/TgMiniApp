import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import WebApp from '@twa-dev/sdk'
import { TonConnectButton, useTonConnectUI } from '@tonconnect/ui-react'
import { Address } from './Address'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      {/* Here we add our button with alert callback */}
      <div className="card">
        <TonConnectButton />
        {/* <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>Show Alert</button> */}
        <Address />
        <Settings />
      </div>
    </>
  )
}

export default App

export const Settings = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI()

  const onLanguageChange = (lang) => {
    setOptions({ language: lang })
  }

  const myTransaction = {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
    messages: [
      {
        address: 'EQBBJBB3HagsujBqVfqeDUPJ0kXjgTPLWPFFffuNXNiJL0aA',
        amount: '20000000',
        // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
      },
      {
        address: 'EQDmnxDMhId6v1Ofg_h5KR5coWlFG6e86Ro3pc7Tq4CA0-Jn',
        amount: '60000000',
        // payload: "base64bocblahblahblah==" // just for instance. Replace with your transaction payload or remove
      },
    ],
  }

  return (
    <div>
      <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>Send transaction</button>

      <div>
        <label>language</label>
        <select onChange={(e) => onLanguageChange(e.target.value)}>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
      </div>
    </div>
  )
}
