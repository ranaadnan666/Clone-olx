import React from 'react'
import { Routes, Route } from "react-router-dom"
import ScrollToTop from './Use'
import MainHome from '../pages/home/Index'
import Head from '../pages/Head/Head'
import Product from '../pages/Product/Product'
import Foot from '../pages/footer/Foot'
import ProductFilter from '../pages/FilteredProduct/ProductFilter'

const SetRoute = () => {
  return (
        <div>
        <ScrollToTop>
        <Head/>
        <Routes>
        <Route path="/" element={ <MainHome/> } />
        <Route path="/detail" element={ <Product/> } />
        <Route path="/filtered" element={ <ProductFilter/> } />
        
        </Routes>
        <Foot/>
        </ScrollToTop>
        </div>
  )
}

export default SetRoute