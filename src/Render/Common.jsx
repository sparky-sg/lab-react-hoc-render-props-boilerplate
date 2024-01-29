import React, { useState } from 'react'

const Common = (props) => {

    let [count,setCount] = useState(0)

    const handleC = () =>{
        let j = count +1
        setCount(j);
    }

  return (
    <>{props.render(handleC, count)}</>
  )
}

export default Common