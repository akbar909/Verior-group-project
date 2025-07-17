import React from 'react'
import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.png'
const Frames = () => {
  return (
    <div class="dark:bg-[#1A1A1A] bg-[#F6F6F6] p-4 sm:p-8 flex flex-col space-y-4">

  <div class="flex justify-start">
    <img src={Frame1} alt="" />
  </div>


  <div class="flex justify-end">
    <img src={Frame2} alt="" />
  </div>
</div>

  )
}

export default Frames