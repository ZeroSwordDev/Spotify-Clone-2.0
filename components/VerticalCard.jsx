import Image from 'next/image'
import React from 'react'
import VerticalCardImage from "../src/app/img/VerticalCardImage.png"
const VerticalCard = () => {
  return (
    <div class="flex w-190 h-270 flex-col justify-center items-center flex-shrink-0">
        <Image src={VerticalCardImage} alt="card image" />
        <div>
            <h1>Hot Hits USA</h1>
            <h3>The hottest tracks in the United States</h3>
        </div>

    </div>

  )
}

export default VerticalCard