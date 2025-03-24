import React from 'react'
import './button.css'

const Button = ({onClick}) => {
  return (
    <div>
      <button className='btn' onClick={onClick}>☰</button>
    </div>
  )
}

export default Button
