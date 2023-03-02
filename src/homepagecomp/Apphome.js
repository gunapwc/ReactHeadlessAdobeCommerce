import React from "react";
import Slider from "./slider";
import Exclusiveproduct from "./Exclusive-section";
import Winterseason from "./Winter-season-section";
import Missingoffer from "./Missing-offer-section";
import Brandexplore from "./Brand-explore";
import Handpicked from "./Handpicked-section";
import Discoverbrand from "./Discover-brands-section";
import Ourservice from "./Ourservice-section";
import Supplements from "./Supplements-section";


function Apphome() {
    return (
        <div>
            <Slider />
            <Exclusiveproduct />
            <Winterseason />
            <Missingoffer />
            <Supplements />
            <Brandexplore />
            <Handpicked />
            <Discoverbrand />
            <Ourservice />

        </div>
    )

}


export default Apphome;


