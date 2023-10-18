import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'
import NotFound from '../pages/NotFound/NotFound'
import Customers from "../pages/Customers/Customers"
import Income from '../pages/Income/Income'
import Promote from '../pages/Promote/Promote'
import Help from '../pages/Help/Help'

const AllNavigations = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Product />}></Route>
            <Route path='/customers' element={<Customers />}></Route>
            <Route path='/income' element={<Income />}></Route>
            <Route path='/promote' element={<Promote />}></Route>
            <Route path='/help' element={<Help />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    )
}

export default AllNavigations