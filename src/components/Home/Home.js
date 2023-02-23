import React from 'react'
import './home.css'
import Image from '../Image/image'
import Introduction from '../Introduction/Introduction'



export default function Home() {
    return (
        
          <div className="container-fluid row text-center">
        <div className="col-md-6 d-flex align-items-center  justify-content-center">
        <Image />
    </div>
    <div className="x  col-md-6 d-flex align-items-center justify-content-center ">
   <Introduction/>

    </div>
  </div>
    )
}
