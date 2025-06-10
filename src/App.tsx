import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const testUrl = (itemId: string) => { 
  return `https://west.albion-online-data.com/api/v2/stats/prices/${itemId}.json?locations=Caerleon,Bridgewatch&qualities=2`
}

function App() {
  const [itemInfo, setItemInfo] = useState("")
  const [searchItem, setSearchItem] = useState("")

  const fetchItemInfo = () => {
    fetch(testUrl(searchItem)).then(response => response.json()).then(data => setItemInfo(JSON.stringify(data)))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input 
          placeholder='Item ID eg T4_BAG'
          onChange={(event) => setSearchItem(event.target.value)}
        />
        <button onClick={fetchItemInfo}>
          Get The Data!
        </button>
        <p>
          The Item Price is: {itemInfo}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
