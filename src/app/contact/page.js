"use client"
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaMap } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '38.5%',
  height: '68.1%'
};

const page = () => {
  return (
    <div>
      <Header />
      <div className='grid md:grid-cols-2 lg:px-48 md:px-32 sm:px-16 px-8 md:py-24 py-10'>
        <div className='px-10 py-6 space-y-6 text-gray-600'>
          <div className='text-[48px] font-bold'>Say Hello.</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </div>
          <div className='pl-6  w-[80px] h-1 bg-[#f24d4d]'></div>
          <div className='space-y-5'>
            <div className='flex items-center space-x-4'>
              <div className='text-[#f24d4d] text-[20px]'><FaMap /></div>
              <div>212 7th St SE, Washington, DC 20003, USA</div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='text-[#f24d4d] text-[20px]'><GrMail /></div>
              <div>info@example.com</div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='text-[#f24d4d] text-[20px]'><AiFillPhone /></div>
              <div>123-456-7890/91</div>
            </div>
          </div>
        </div>
        <div>
          <div className="sm:flex sm:space-x-5 space-y-2 sm:space-y-0">
            <input type="text" name="your name" className="border w-[50%] md:h-[55px] h-[45px] sm:px-4 px-1 placeholder-gray-500 md:rounded-lg rounded-md " placeholder="Your Name" />
            <input type="email" name="your name" className="border w-[50%] md:h-[55px] h-[45px] sm:px-4 px-1 placeholder-gray-500 md:rounded-lg rounded-md" placeholder="Email Address" />
          </div>
          <select className="text-gray-500 w-[100%] md:h-[55px] h-[45px] sm:px-4 px-1 md:rounded-lg rounded-md">
            <option value="volvo">Basic</option>
            <option value="saab">Advance</option>
          </select>
          <textarea type="message" name="your name" className="border placeholder-gray-500 w-[100%] h-[210px] sm:px-4 px-1 py-3 md:rounded-lg rounded-md" placeholder="Message"></textarea>
          <input type="button" value="Submit" className="border w-[100%] md:h-[55px] h-[45px] sm:px-4 px-1 md:rounded-lg rounded-md hover:bg-[#e96262] bg-[#f24d4d] text-white font-semibold text-[20px]" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default page;
