"use client"
import Header from '../components/Header'
import { FaRegSnowflake } from 'react-icons/fa';
import { RxCodesandboxLogo } from 'react-icons/rx';
import { FaRegHandPaper } from 'react-icons/fa';
import { PiDropboxLogoLight } from 'react-icons/pi';
import { BiSolidHeartCircle } from 'react-icons/bi';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import React, { useState } from 'react';
import Footer from '../components/Footer';

const page = () => {
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const handleDivClick1 = () => {
    setShowDiv1(!showDiv1);
  };
  const handleDivClick2 = () => {
    setShowDiv2(!showDiv2);
  };
  const handleDivClick3 = () => {
    setShowDiv3(!showDiv3);
  };

  const team_Cards = [
    {
      id: 1,
      title: 'Amanda Lee',
      description: 'Creative Head',
      imageUrl: 'about1.jpg',
    },
    {
      id: 2,
      title: 'Lee Stoner',
      description: 'Marketing Head',
      imageUrl: 'about2.jpg',
    },
    {
      id: 3,
      title: 'Monica Gala',
      description: 'Graphic Designer',
      imageUrl: 'about3.jpg',
    },
  ];
  return (
    <div className="h-full">
      <Header />
      <div className='bg-about_bg h-[400px] opacity-70 w-[100%] flex flex-col items-center justify-center'>
        <div className='font-bold sm:text-[64px] text-[48px]'>About Us</div>
        <div className='sm:w-[600px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
      </div>

      <div className='grid lg:grid-cols-2 xl:px-[200px] sm:px-[80px] px-[10px] py-20 text-gray-700 gap-y-10 bg-white'>
        <div className='sm:px-16 space-y-6'>
          <div className='text-[38px] font-semibold'>We Are Your Favourite, Online Store.</div>
          <div>Dui habitasse provident eu etiam praesent placeat maiores temporibus, accumsan parturient autem, mi animi ipsa. Lobortis maxime quos, pellentesq.
            Ee platea animi commodo tincidunt ridiculus tempora, ornare lorem quam sit possimus? Quam cras facilisi officia fusce. Ac, excepteur excepteur fusce? Sunt minim expedita magnis!</div>
        </div>
        <div className='grid sm:grid-cols-2 gap-8'>
          <div className='space-y-1'>
            <div><FaRegSnowflake className='text-[25px] text-[#ff5151]' /></div>
            <div className='font-semibold text-[22px]'>Eros Imperdie</div>
            <div>We’ll generate a sitemap for your site, submit it to search engine is and track.</div>
          </div>
          <div className='space-y-1'>
            <div><RxCodesandboxLogo className='text-[25px] text-[#ff5151]' /></div>
            <div className='font-semibold text-[22px]'>Proident Congu</div>
            <div>We’ll generate a sitemap for your site, submit it to search engine is and track.</div>
          </div>
          <div className='space-y-1'>
            <div><FaRegHandPaper className='text-[25px] text-[#ff5151]' /></div>
            <div className='font-semibold text-[22px]'>Rerum Rutrum</div>
            <div>We’ll generate a sitemap for your site, submit it to search engine is and track.</div>
          </div>
          <div className='space-y-1'>
            <div><PiDropboxLogoLight className='text-[25px] text-[#ff5151]' /></div>
            <div className='font-semibold text-[22px]'>Vero Maecenas</div>
            <div>We’ll generate a sitemap for your site, submit it to search engine is and track.</div>
          </div>
        </div>
      </div>

      <div className='lg:flex justify-between space-y-7 bg-[#ff5151] place-items-center p-12 xl:px-[250px] sm:px-[100px] px-[50px]'>
        <div className='font-bold md:text-[30px] text-[20px] text-white'>Get Best Offers On Customized Designs!</div>
        <div>
          <button type="button" className="text-white border bg-[#f35151] hover:bg-[#f24d63c2] focus:ring-4 font-medium rounded-lg mt-2 text-sm px-9 py-3 text-center inline-flex items-center">
            Get Started
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </div>
      </div>


      {/* Cards Start content */}
      <div className='bg-white sm:p-40 p-5'>
        <div className='flex flex-col items-center space-y-8 text-slate-700'>
          <div className='pl-6  sm:text-[34px] text-[20px] font-semibold'>Meet Our Creative Team</div>
          <div className='pl-6  w-[80px] h-1 bg-[#f24d4d]'></div>
        </div>
        <div className='lg:flex lg:space-x-10 lg:space-y-0 space-y-10 justify-center items-center lg:px-10 px-5 mt-20'>
          {team_Cards && team_Cards.map((item) =>

            <div className='flex flex-col space-x-3 items-center space-y-1'>
              <div><img src={item.imageUrl} alt="" className='w-[330px]' /></div>
              <div className='font-semibold text-[18px]'>{item.title}</div>
              <div className='text-[14px] text-gray-600'>{item.description}</div>
            </div>

            // <Testamonials item={b} />
          )}

        </div>
      </div>
      {/* Cards End content */}

      <div className='grid md:grid-cols-2 gap-y-6 py-28 lg:px-48 px-16'>
        <div className='space-y-7'>
          <div className='font-semibold text-[32px]'>Best Quality Printed T-Shirts & Mugs At Affordable Price!</div>
          <div>
            <div class="flex xl:space-x-8">
              <div className='space-y-3'>
                <div className='flex items-center' ><BiSolidHeartCircle className="text-[#f24d4d] p-2 text-[30px]" /><p>Personal Gifts</p></div>
                <div className='flex items-center' ><BiSolidHeartCircle className="text-[#f24d4d] p-2 text-[30px]" /><p>Occasional Gifts</p></div>
                <div className='flex items-center' ><BiSolidHeartCircle className="text-[#f24d4d] p-2 text-[30px]" /><p>Corporate Gifts</p></div>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center' ><BiSolidHeartCircle className="text-[#f24d4d] p-2 text-[30px]" /><p>Couple Tshirt</p></div>
                <div className='flex items-center' ><BiSolidHeartCircle className="text-[#f24d4d] p-2 text-[30px]" /><p>Wedding Package</p></div>
                <div className='flex items-center' ><BiSolidHeartCircle className="text-[#f24d4d] p-2 text-[30px]" /><p>Corporate Gifts</p></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="cursor-pointer flex items-center space-x-3 md:p-4 py-2 " onClick={handleDivClick1}>
              <p className='text-[#f24d4d] text-[20px]'><BsFillArrowDownCircleFill /></p><strong className='hover:text-[#f24d4d]'>We Can Custom Design Your Ideas</strong>
            </div>
            {showDiv1 && (
              <div className="text-gray-600 ml-10 p-4 mt-2">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
            )}
            <div className="cursor-pointer flex items-center space-x-3 md:p-4 py-2" onClick={handleDivClick2}>
              <p className='text-[#f24d4d] text-[20px]'><BsFillArrowDownCircleFill /></p><strong className='hover:text-[#f24d4d]'>We Can Custom Design Your Ideas</strong>
            </div>
            {showDiv2 && (
              <div className="text-gray-600 ml-10 p-4 mt-2">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
            )}
            <div className="cursor-pointer flex items-center space-x-3 md:p-4 py-2" onClick={handleDivClick3}>
              <p className='text-[#f24d4d] text-[20px]'><BsFillArrowDownCircleFill /></p><strong className='hover:text-[#f24d4d]'>We Can Custom Design Your Ideas</strong>
            </div>
            {showDiv3 && (
              <div className="text-gray-600 ml-10 p-4 mt-2">
                Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
            )}
          </div>

        </div>
      </div>

      <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-6 sm:px-[200px] px-[40px] py-20 bg-white'>
        <div className='flex flex-col items-center space-y-2'>
          <div><img src="about_1.jpg" alt="" className='w-[55px]' /></div>
          <div className='font-semibold xl:text-[22px] text-slate-700'>Worldwide Shipping</div>
          <div className='text-center pt-4'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <div><img src="about_2.png" alt="" className='w-[55px]' /></div>
          <div className='font-semibold xl:text-[22px] text-slate-700'>Best Quality</div>
          <div className='text-center pt-4'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <div><img src="about_3.png" alt="" className='w-[55px]' /></div>
          <div className='font-semibold xl:text-[22px] text-slate-700'>Best Offers</div>
          <div className='text-center pt-4'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <div><img src="about_4.png" alt="" className='w-[55px]' /></div>
          <div className='font-semibold xl:text-[22px] text-slate-700'>Secure Payments</div>
          <div className='text-center pt-4'>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default page