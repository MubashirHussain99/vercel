import React from 'react'

const Hottest_Deals = ({item}) => {
    return (
        <div className="lg:w-[120px] mt-5">
            <img src={item.imageUrl} alt="" className="lg:h-[120px] lg:w-[120px] h-[300px] w-[400px]" />
            <div className="text-[#f24d4d]">{item.title}</div>
            <div className="flex space-x-2 text-[13px]">
                <p className="line-through">{item.old_p} </p>
                <p>{item.new_p}</p>
            </div>
        </div>
    )
}

export default Hottest_Deals