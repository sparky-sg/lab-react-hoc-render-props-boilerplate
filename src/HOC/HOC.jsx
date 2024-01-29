import React, { useState } from 'react'

const HOC = (OGComponent) => {
const hjh = () =>{
    let [count, setCount] = useState(0)

    const handleClick = () =>{
        let y = count + 1
        setCount(y) 
    }

  return (
    <OGComponent data={count} functionality = {handleClick}/>
  )
};

  return hjh

}

export default HOC