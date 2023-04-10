import React from 'react'
import "./Banner.scss"

const Banner = (props) => {
    const { img , title,text} = props
  return (
    <div className='banner'>
        <div className="banner_text">
            <h6>{title}</h6>
            <h2>{text}</h2>
        </div>
        <div className='banner_img'><img src={img} alt="" /></div>
    </div>
  )
}

export default Banner