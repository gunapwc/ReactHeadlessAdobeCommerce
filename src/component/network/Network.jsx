import React from 'react'
import { Button } from '../button/button'
import PriTitle from '../innerSection/PriTitle'
import "./network.scss"


const Network = () => {
  return (
    <div className="network">
    <PriTitle
      title={"OUR NETWORK"}
      subTitle={"Leading Pharmacy Chain in the GCC"}
      details={`Green Delta Assist, a division of Green Delta Assist is backed by more
  than two decades of experience in pharmaceutical retailing. Recognised
  today as the region’s leading pharmacy retail chain, Green Delta Assist
  focuses on “delivering good health & happiness” through friendly
  neighbourhood pharmacies that are customer-centric & easily
  accessible.`}
      
    />

    <div className="network_list">
      <div className="network_list_section">
        <h1>238</h1>
        <h2>Retail Outlets</h2>
      </div>
      <div className="network_list_section">
        <h1>238</h1>
        <h2>Retail Outlets</h2>
      </div>
      <div className="network_list_section">
        <h1>238</h1>
        <h2>Retail Outlets</h2>
      </div>
      <div className="network_list_section">
        <h1>238</h1>
        <h2>Retail Outlets</h2>
      </div>
    </div>
    <div className="button_section">
      <Button text={"OWN A FRANCHISE"} />
    </div>
  </div>
  )
}

export default Network
