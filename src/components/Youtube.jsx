import React from 'react'
import { Search } from './Search'
import { LeftScroll } from './LeftScroll'
import { MainContent } from './MainContent'

export const Youtube = () => {
  return (
    <>
    <div className="d-flex flex-row overflow-y-scroll">
    <div className="">
    <LeftScroll/>
    </div>
    <div className='w-100 '>
    <Search/>
    </div>
    </div>  
    </>
  )
}
