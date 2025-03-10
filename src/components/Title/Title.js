import React from 'react'
import './Title.css'
function Title(props) {
  return (
   <div className="header">
    <h4> {props.titlePrimary}</h4><h5><span >{props.titleSecondary}</span></h5>
  </div>
  )
}

export default Title