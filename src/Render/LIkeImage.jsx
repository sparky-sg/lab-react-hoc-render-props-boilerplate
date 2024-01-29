import React from 'react'

const LIkeImage = (props) => {
  return (
    <div>
    <button onClick={props.functionality}>Like Post {props.data}</button>
  </div>
  )
}

export default LIkeImage