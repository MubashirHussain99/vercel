import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-[#415161] text-white py-[100px] lg:pl-[180px] pl-[50px] gap-y-5'>
                <div>
                    <div className='font-semibold text-[25px]'>Custom Print Store</div>
                    <div>icons atre missing</div>
                </div>
                <div>
                    <div className='font-semibold text-[25px]'>Get in Touch with Us for the Best Quality Custom Prints & Supplies.</div><br />
                    <div>Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit, sed quia non numquam eius modi tempora incidunt lores ta porro ame.</div>
                </div>
                <div className='font-semibold text-[25px] lg:pl-[70px]'>Quick Links</div>
                <div className='font-semibold text-[25px]'>Important Links</div>
            </div>
            <div className='sm:flex justify-between  bg-[#415161] text-white border-4 border-gray-700 py-5 sm:px-36 px-10'>
                <div className='text-[12px]'>Copyright © 2023 | Custom Printing</div>
                <div className='text-[12px]'>Powered By Custom Printing</div>
            </div>
        </div>

    )
}

export default Footer