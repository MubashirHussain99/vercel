import Image from 'next/image';
import React from 'react'
import { CiStar } from 'react-icons/ci';
const Shirts = ({ item }) => {
  return (
    <div className='flex items-center flex-col mt-24'>
      <div><img src={item.imageUrl} alt="" className='lg:w-[285px] w-[830px]' /></div>
      <div className='mt-1 text-[14px] text-gray-500'>{item.title}</div>
      <div className='mt-1 text-[20px] font-semibold'>{item.description}</div>
      <div className='flex'>
      <CiStar/>
        <CiStar/>
        <CiStar/>
        <CiStar/>
        <CiStar/>
      </div>
      <div className='font-semibold'>{item.price}</div>
    </div>
  )
}

export default Shirts;