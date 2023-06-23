import React from 'react'
import { Routes, Route } from "react-router-dom"
import ScrollToTop from './Use'
import MainHome from '../pages/home/Index'
import Head from '../pages/Head/Head'
import Product from '../pages/Product/Product'
import Foot from '../pages/footer/Foot'
import ProductFilter from '../pages/FilteredProduct/ProductFilter'
import Chat from '../pages/chat/Chat'
import ProfileMain from '../pages/profile/Profile'
import Setting from '../pages/setting/Setting'

const SetRoute = () => {
  return (
        <div>
        <ScrollToTop>
        <Head/>
        <Routes>
        <Route path="/" element={ <MainHome/> } />
        <Route path="/detail" element={ <Product/> } />
        <Route path="/filtered" element={ <ProductFilter/> } />
        <Route path="/chat" element={ <Chat/> } />
        <Route path="/profile" element={ <ProfileMain/> } />
        <Route path="/setting" element={ <Setting/> } />
        
        </Routes>
        <Foot/>
        </ScrollToTop>
        </div>
  )
}

export default SetRoute