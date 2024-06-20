import React from 'react'
import { SearchBar } from './SearchBar'
import {SearchScroll} from './SearchScroll'

export const Search = () => {
  return (
    <div className='mb-3 bg-black   '>
      <div className="p-2"><SearchBar/></div>
      <div className="p-2"><SearchScroll/></div>
      
      
    </div>
  )
}
