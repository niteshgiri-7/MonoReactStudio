import React from 'react'
import HeroText from './HeroText'
import HeroImg from './HeroImg'

const MainContainer = () => {
  return (
    <div className=' px-[10%] py-[1%] flex  max-h-[92vh] '>
      <HeroText/>
      <HeroImg/>
    </div>
  )
}

export default MainContainer
