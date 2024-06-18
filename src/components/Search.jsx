import React from 'react'
import { SearchBar } from './SearchBar'
import {SearchScroll} from './SearchScroll'

export const Search = () => {
  return (
    <div className='d-flex flex-column mb-3 '>
      <div className="p-2"><SearchBar/></div>\
      <div className="p-2"><SearchScroll/></div>
      
      
    </div>
  )
}
