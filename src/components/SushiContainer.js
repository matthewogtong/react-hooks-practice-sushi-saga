import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, handleEatenSushi }) {

  const [index, setIndex] = useState(0)

  const onlyFourSushi = sushis.slice(index, index + 4)

  const displaySushis = onlyFourSushi.map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} handleEatenSushi={handleEatenSushi} />
  })

  const handleMoreSushi = () => {
    setIndex(index + 4)
  }

  return (
    <div className="belt">
      {displaySushis}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
