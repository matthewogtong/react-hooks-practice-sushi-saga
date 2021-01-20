import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushisArr => {
        const updatedSushisArr = sushisArr.map(sushi => {
          return {
            ...sushi,
            eaten: false
          }
        })
        setSushis(updatedSushisArr)
      })
  }, [])

  console.log(sushis)

  const handleEatenSushi = (eatenSushi) => {
    if (!eatenSushi.eaten && wallet > eatenSushi.price) {
      const updatedSushis = sushis.map(sushi => {
        if (sushi.id === eatenSushi.id) {
          return {
            ...sushi, 
            eaten: true
          }
        } else {
          return sushi
        }
      })
      setSushis(updatedSushis)
      setWallet(wallet - eatenSushi.price)
    } else {
      alert("you cannot purchase this sushi")
    }
  }

  const eatenSushis = sushis.filter(sushi => {
    return sushi.eaten
  })

  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEatenSushi={handleEatenSushi}/>
      <Table plates={eatenSushis} wallet={wallet}/>
    </div>
  );
}

export default App;
