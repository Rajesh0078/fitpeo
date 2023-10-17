import React from 'react'

const Overview = () => {
    const month = [
        {
            mon: "Jan",
            earning: "7rem",
            bg: "#e0dcdc"
        }, {
            mon: "Feb",
            earning: "10rem",
            bg: "#e0dcdc"
        }, {
            mon: "Mar",
            earning: "9rem",
            bg: "#e0dcdc"
        }, {
            mon: "Apr",
            earning: "5rem",
            bg: "#e0dcdc"
        },
        {
            mon: "May",
            earning: "10rem",
            bg: "#e0dcdc"
        }, {
            mon: "Jun",
            earning: "11rem",
            bg: "#e0dcdc"
        }, {
            mon: "Jul",
            earning: "13rem",
            bg: "blue"
        }, {
            mon: "Aug",
            earning: "8rem",
            bg: "#e0dcdc"
        }, {
            mon: "Sep",
            earning: "4rem",
            bg: "#e0dcdc"
        }, {
            mon: "Oct",
            earning: "9rem",
            bg: "#e0dcdc"
        }, {
            mon: "Nov",
            earning: "12rem",
            bg: "#e0dcdc"
        }, {
            mon: "Dec",
            earning: "11rem",
            bg: "#e0dcdc"
        },
    ]

    return (
        <div className='mt-6 grid grid-cols-3 gap-6'>
            <div className='col-span-2 shadow_x h-[20rem] rounded-xl bg-white  px-5 py-4 md:col-span-3 lg:col-span-2 sm:col-span-3 min-[280px]:col-span-3'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>Overview</p>
                    <select name="term" id="term" className='border py-1 text-sm outline-none px-1'>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Half-yearly">Half-yearly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <p className='text-slate-400 text-sm'>Monthly Earning</p>
                <div className='flex items-end h-[75%] justify-between mt-3'>
                    {
                        month.map((i, index) => {
                            return <div key={index}>
                                <p className={` rounded-t-md  w-[2.6rem] max-[489px]:w-[1.8rem] `} style={{ background: i.bg, height: i.earning }} ></p>
                                <p className='font-medium text-slate-600 text-center mt-1'>{i.mon}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='col-span-1 shadow_x h-[20rem] rounded-xl bg-white px-5 py-4 md:col-span-3 sm:col-span-3 lg:col-span-1 min-[280px]:col-span-3'>
                <p className='font-semibold'>Customers</p>
                <p className='text-slate-400 text-sm'>Customers that buy products</p>
                <div className='flex justify-center items-center h-[80%] mt-2 '>
                    <div className='h-[12rem] w-[12rem] rounded-full shadow_x flex justify-center items-center relative'>
                        <div className='absolute '>
                            <div className="piey font-semibold text-center">64%
                                <p className='text-sm w-[5rem] leading-4'>Total New Customers</p>
                            </div>
                        </div>
                        <div className='absolute '>
                            <div className="pie font-semibold text-center ">64%
                                <p className='text-sm w-[5rem] leading-4'>Total New Customers</p>
                            </div>
                        </div>
                        <div className='absolute '>
                            <div className="piex font-semibold text-center">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview