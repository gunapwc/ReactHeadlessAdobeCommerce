import React from 'react'

import "./button.scss"

export function Button({text, click})  {
  return (
    <>
    <button className='button-primary' onClick={click}>{text}</button>
      
    </>
  )
}


