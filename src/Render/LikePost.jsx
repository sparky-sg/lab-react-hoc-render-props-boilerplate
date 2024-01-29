import React from 'react'

const LikePost = (props) => {
  return (
    <div>
    <button onClick={props.functionality}>Like Post {props.data}</button>
  </div>
  )
}

export default LikePost