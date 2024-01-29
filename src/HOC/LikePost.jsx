import React, { useState } from 'react'
import HOC from './HOC';

function LikePost(props) {


  return (
    <div>
      <button onClick={props.functionality}>Like Post {props.data}</button>
    </div>
  )
}

export default HOC(LikePost);