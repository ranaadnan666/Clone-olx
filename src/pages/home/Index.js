import React from 'react'
import Home from '../../components/home/Home'
import Slides from '../../components/home/Slide'
import AutoPlayMethods from "../../components/home/Slides";

const MainHome = () => {
  return (
    <div>
      <Slides/>
      <Home/>
      <AutoPlayMethods/>
      </div>
  )
}

export default MainHome