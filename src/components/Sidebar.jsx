import React from 'react'
import { MdSettingsInputAntenna } from "react-icons/md"
import { HiViewGrid } from "react-icons/hi"
import { BiHelpCircle, BiMoneyWithdraw } from "react-icons/bi"
import { CgProductHunt } from "react-icons/cg"
import { FaPeopleRoof, FaAward } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className='py-4 px-3 bg-[#1c265f] w-[17%] h-[100vh]'>
            <div className='flex items-center gap-1 flex-col w-full'>
                <div className='flex items-center gap-1 w-full'>
                    <MdSettingsInputAntenna fill='white' size={30} className='text-white mx-1' />
                    <p className='font-medium text-white max-[480px]:hidden'>Dashboard</p>
                </div>
                <div className='mt-5 text-gray-100 w-full'>
                    <NavLink to={'/'} className=" p-2 flex items-center rounded-md mb-1">
                        <HiViewGrid fill='white' size={20} className='inline me-1 ' />
                        <span className='max-[480px]:hidden'>Dashboard</span>
                    </NavLink>
                    <NavLink to={'/products'} className="p-2 flex items-center rounded-md mb-1">
                        <CgProductHunt fill='white' size={20} className='inline me-1 ' />
                        <span className='max-[480px]:hidden'>Products</span>
                    </NavLink>
                    <NavLink to={'/customers'} className="p-2 flex items-center rounded-md mb-1">
                        <FaPeopleRoof fill='white' size={20} className='inline me-1 ' />
                        <span className='max-[480px]:hidden'>Customers</span>
                    </NavLink>
                    <NavLink to={'/income'} className="p-2 flex items-center rounded-md mb-1">
                        <BiMoneyWithdraw fill='white' size={20} className='inline me-1 ' />
                        <span className='max-[480px]:hidden'>Income</span>
                    </NavLink>
                    <NavLink to={'/promote'} className="p-2 flex items-center rounded-md mb-1">
                        <FaAward fill='white' size={20} className='inline me-1 ' />
                        <span className='max-[480px]:hidden'>Promote</span>
                    </NavLink>
                    <NavLink to={'/help'} className="p-2 flex items-center rounded-md mb-1">
                        <BiHelpCircle fill='white' size={20} className='inline me-1 ' />
                        <span className='max-[480px]:hidden'>Help</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
