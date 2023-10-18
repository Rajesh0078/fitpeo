import React from 'react'

import { GiHand } from "react-icons/gi"
import { FiSearch } from "react-icons/fi"

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <p>Hello Shahrukh<GiHand className='inline ms-2' /></p>
            <div className='bg-white px-2 py-1'>
                <FiSearch className='inline align-middle ' />
                <input type="text" className='align-middle outline-none ps-1' />
            </div>
        </div>
    )
}

export default Header