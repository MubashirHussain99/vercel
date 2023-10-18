"use client"
import Image from 'next/image'
import Header from './components/Header'
import Mugs from './components/Mugs'
import Shirts from './components/Shirts';
import Footer from './components/Footer';
import { AiFillStar } from 'react-icons/ai';

export default function Home() {
  const mugsDataWithImages = [
    {
      id: 1,
      title: 'Mugs',
      description: 'Black Printed Coffee Mug',
      imageUrl: 'mug1.jpg',
      price: '£15.00',
    },
    {
      id: 2,
      title: 'Mugs',
      description: 'Father’s Day Coffee Mug',
      imageUrl: 'mug2.jpg',
      price: '£19.00',
    },
    {
      id: 3,
      title: 'Mugs',
      description: 'Personalised Mug',
      imageUrl: 'mug3.jpg',
      price: '£15.00',
    },
    {
      id: 4,
      title: 'Mugs',
      description: 'Valentine’s Day Special Mug',
      imageUrl: 'mug4.jpg',
      price: '£18.00',
    },
  ];
  const shirtsDataWithImages = [
    {
      id: 1,
      title: 'Tshirts',
      description: 'Green Printed Tshirt',
      imageUrl: 'sh1.jpg',
      price: '£15.00',
    },
    {
      id: 2,
      title: 'Tshirts',
      description: 'Printed Brown Tshirt',
      imageUrl: 'sh2.jpg',
      price: '£19.00',
    },
    {
      id: 3,
      title: 'Tshirts',
      description: 'Printed Dark Blue Tshirt',
      imageUrl: 'sh3.jpg',
      price: '£15.00',
    },
    {
      id: 4,
      title: 'Tshirts',
      description: 'Printed Green Tshirt',
      imageUrl: 'sh4.jpg',
      price: '£18.00',
    },
  ];

  const testDataWithImages = [
    {
      id: 1,
      title: 'Diana Burnwood',
      description: '"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."',
      imageUrl: 'cli1.jpg',
    },
    {
      id: 2,
      title: 'Jessica Foxx​',
      description: '"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."',
      imageUrl: 'cli2.png',
    },
    {
      id: 3,
      title: 'Lily Granger',
      description: '"Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare nunc, autem."',
      imageUrl: 'cli3.png',
    },
  ];
  return (
    <div className="h-screen w-[100%] overflow-y-scroll">
      <Header />
      {/* header down start content */}
      <div className='md:flex lg:px-[15%] md:px-[8%] px-[5%] bg-[#eff1f2] py-20'>
        <div className='space-y-2 text-[#415161]'>
          <div className='w-16 h-[3px] bg-[#f24d4d]'></div>
          <div className='text-[18px]'>Best Quality Products</div>
          <div className='xl:text-[60px] md:text-[40px] text-[35px] font-semibold flex flex-col -space-y-5'><div>We Print What</div> <div>You Want!</div></div>
          <div>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien.</div>
          <div>
            <button type="button" class="text-white bg-[#f24d4d] hover:bg-[#f24d63c2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              GET STARTED
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <Image className="" src="/lady.png" width={750} height={0} alt="rocking girl" />
        </div>
      </div>
      {/* header down end content */}

      {/* Cards start content */}
      <div className='grid lg:grid-cols-3 py-40 lg:px-[16%] lg:gap-x-8 px-10 bg-white'>
        <div className='lg:h-[480px] h-[700px] flex flex-col items-center'>
          <div className=''><Image className="lg:h-[420px] sm:h-[600px] h-[500px] lg:w-[350px] w-[700px]" src="/cardg1.jpg " width={600} height={0} alt="rocking girl" /></div>
          <div className='pt-2'>
            <div>Most Loved Designs</div>
            <div className='font-semibold'>Customize Your T-Shirts</div>
          </div>
        </div>
        <div className='lg:h-[480px] h-[700px] flex flex-col items-center'>
          <div className='pb-4'>
            <div>Design of the Week</div>
            <div className='font-semibold'>Rubber Print Your T-Shirt</div>
          </div>
          <div className=''><Image className="lg:h-[420px] sm:h-[600px] h-[500px] lg:w-[350px] w-[700px]" src="/cardg2.jpg " width={600} height={0} alt="rocking girl" /></div>
        </div>
        <div className='lg:h-[480px] h-[700px] flex flex-col items-center'>
          <div className=''><Image className="lg:h-[420px] sm:h-[600px] h-[500px] lg:w-[350px] w-[700px]" src="/cardg3.jpg " width={600} height={0} alt="rocking girl" /></div>
          <div className='pt-2'>
            <div>New T-shirt Edition</div>
            <div className='font-semibold'>Customize Plain Colors</div>
          </div>
        </div>
      </div>
      {/* Cards end content */}

      {/* Second Cards Start content */}
      <div className=' bg-white pb-[100px]'>
        <div className='flex flex-col items-center space-y-8'>
          <div className='pl-6 text-[30px] font-semibold'>Our Featured Products</div>
          <div className='pl-6 w-20 h-1 bg-[#f24d4d]'></div>
        </div>
        <div className='lg:flex sm:space-x-5 justify-center px-10'>
          {mugsDataWithImages && mugsDataWithImages.map((b) => <Mugs item={b} />)}
        </div>
      </div>



      <div className='h-[700px] bg-parallax bg-cover bg-fixed'>
        <div className="h-[580px]">
          <div className="flex flex-col justify-center h-full space-y-5 lg:px-[250px] md:px-[180px] sm:px-[120px] px-[50px]">
            <h1 className='text-[29px] font-bold text-gray-600 flex flex-col'><span>Hurry Up!</span><span className='text-[35px]'>Deal of the Day!</span> </h1>
            <p className='mt-4 font-bold text-gray-600'>Buy This T-shirt At 20% Discount, Use Code Off20</p>
            <div>
              <button type="button" className="text-white bg-[#f35151] hover:bg-[#f24d63c2] focus:ring-4 font-medium rounded-lg mt-2 text-sm px-9 py-3 text-center inline-flex items-center">
                SHOP NOW
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white py-20'>
        <div className='flex flex-col items-center space-y-8 '>
          <div className='pl-6 text-[30px] font-semibold'>Most Loved Products</div>
          <div className='pl-6 w-20 h-1 bg-[#f24d4d]'></div>
        </div>
        <div className='lg:flex sm:space-x-5 justify-center px-10'>
          {shirtsDataWithImages && shirtsDataWithImages.map((b) => <Shirts item={b} />)}
        </div>
      </div>

      {/* Third Cards End content */}

      {/* Testimonials Start content */}
      <div className='bg-white pt-40'>
        <div className='flex flex-col items-center space-y-8'>
          <div className='pl-6  text-[30px] font-semibold'>Our Happy Clients!</div>
          <div className='pl-6  w-[150px] h-1 bg-[#f24d4d]'></div>
        </div>
        <div className='lg:flex lg:space-x-10 lg:space-y-0 space-y-10 justify-center items-center lg:px-10 px-5 mt-20'>
          {testDataWithImages && testDataWithImages.map((item) =>

            <div className='lg:w-[25%] w-[100%] h-[250px] shadow-lg hover:scale-105 duration-300 rounded-[20px] flex flex-col justify-center space-y-3 px-[30px]'>
              <div className='text-[14px] text-gray-600'>{item.description}</div>
              <div className='flex'>
                <AiFillStar color='#f24d4d' />
                <AiFillStar color='#f24d4d' />
                <AiFillStar color='#f24d4d' />
                <AiFillStar color='#f24d4d' />
                <AiFillStar color='#f24d4d' />
              </div>
              <div className='flex space-x-3 items-center'>
                <div><img src={item.imageUrl} alt="" className='w-[70px] rounded-full' /></div>
                <div className='font-semibold text-[18px]'>{item.title}</div>
              </div>
            </div>

            // <Testamonials item={b} />
          )}

        </div>
        <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-x-4  place-items-center px-[10%] text-gray-600 pt-20'>
          <div className='sm:text-[20px] text-gray-600'>Featured In:</div>
          <div><Image src='/f_logo1.png' alt="" width={150} height={150} className='hover:scale-125' /></div>
          <div><Image src='/f_logo2.png' alt="" width={150} height={150} className='hover:scale-125' /></div>
          <div><Image src='/f_logo3.png' alt="" width={150} height={150} className='hover:scale-125' /></div>
          <div><Image src='/f_logo4.png' alt="" width={150} height={150} className='hover:scale-125' /></div>
          <div><Image src='/f_logo5.png' alt="" width={150} height={150} className='hover:scale-125' /></div>
        </div>
      </div>
      {/* Testimonials End content */}

      {/* Features Start content */}

      {/* Features End content */}

      {/* Footer Starts content */}
      <Footer />
      {/* Footer Ends content */}

    </div>
  )
}
