import Image from 'next/image';
import React from 'react'
import { CiStar } from 'react-icons/ci';
const Mugs = ({ item }) => {
  return (
    <div className='flex items-center flex-col mt-14'>
      <div><img src={item.imageUrl} alt="" className='lg:w-[285px] w-full' /></div>
      <div className='mt-3 text-[14px] text-gray-400'>{item.title}</div>
      <div className='mt-1 text-gray-700 font-semibold'>{item.description}</div>
      <div className='flex'>
        <CiStar/>
        <CiStar/>
        <CiStar/>
        <CiStar/>
        <CiStar/>
      </div>
      <div className='font-semibold text-[14px]'>{item.price}</div>
    </div>
  )
}

export default Mugs;