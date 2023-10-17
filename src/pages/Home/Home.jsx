import React from 'react'
import { GiHand } from "react-icons/gi"
import { FiSearch } from "react-icons/fi"
import { BiDollarCircle } from "react-icons/bi"
import { BsFillHandbagFill } from "react-icons/bs"
import { GrNotes } from "react-icons/gr"
import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import Overview from '../../components/Overview'
import ProductsellHome from '../../components/ProductsellHome'


const Home = () => {
    return (
        <>
            <div className='w-full px-8 py-3 '>
                <div className='flex justify-between items-center'>
                    <p>Hello Shahrukh<GiHand className='inline ms-2' /></p>
                    <div className='bg-white px-2 py-1'>
                        <FiSearch className='inline align-middle ' />
                        <input type="text" className='align-middle outline-none ps-1' />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 min-[350px]:grid-cols-2 min-[280px]:grid-cols-1 '>
                    <div className='col-span-1 h-[10rem] px-3 rounded-xl bg-white shadow_x flex justify-around items-center'>
                        <BiDollarCircle fill='green' className='bg-green-200 p-4 rounded-full h-[7rem] w-[7rem] ' />
                        <div className='ms-3'>
                            <p className='text-sm text-slate-400'>Earning</p>
                            <p className='text-md font-bold'>$198K</p>
                            <p className='text-sm'><span className='text-green-700 font-bold'>37.4%</span> this month</p>
                        </div>
                    </div>
                    <div className='cols-span-1 px-3 h-[10rem] rounded-xl bg-white shadow_x flex justify-around items-center'>
                        <GrNotes fill='#6d316d' className=' bg-fuchsia-400 p-4 rounded-full h-[7rem] w-[7rem] text-[#6d316d]' />
                        <div className='ms-3'>
                            <p className='text-sm text-slate-400'>Orders</p>
                            <p className='text-md font-bold'>$2.4K</p>
                            <p className='text-sm'><span className='text-red-700 font-bold'>2.4%</span> this month</p>
                        </div>
                    </div>
                    <div className='cols-span-1 px-3 h-[10rem] rounded-xl bg-white shadow_x flex justify-around items-center'>
                        <MdOutlineAccountBalanceWallet fill='blue' className='h-[7rem] w-[7rem] bg-slate-300 p-2 rounded-full' />
                        <div className='ms-3'>
                            <p className='text-sm text-slate-400'>Balance</p>
                            <p className='text-md font-bold'>$2.4K</p>
                            <p className='text-sm'><span className='text-red-700 font-bold'>2%</span> this month</p>
                        </div>
                    </div>
                    <div className='cols-span-1 px-3 h-[10rem] rounded-xl bg-white shadow_x flex justify-around items-center'>
                        <BsFillHandbagFill fill='red' className='bg-red-200 h-[7rem] w-[7rem] p-4 rounded-full' />
                        <div className='ms-3'>
                            <p className='text-sm text-slate-400'>Total Sales</p>
                            <p className='text-md font-bold'>$89K</p>
                            <p className='text-sm'><span className='text-green-700 font-bold'>11%</span> this month</p>
                        </div>
                    </div>
                </div>
                <Overview />
                <ProductsellHome />
            </div>

        </>
    )
}

export default Home