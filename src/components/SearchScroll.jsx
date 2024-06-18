import React, { useState } from 'react'

export const SearchScroll = () => {

  const [list, setList] = useState([
    {
      "id":1,
      "value":"All",
    },
    {
      "id":2,
      "value":"Music",
    },
    {
      "id":3,
      "value":"Games",
    },
    {
      "id":4,
      "value":"Comedy",
    },
    {
      "id":5,
      "value":"Remix",
    },
    {
      "id":6,
      "value":"Education",
    },
    {
      "id":7,
      "value":"News",
    },
    {
      "id":8,
      "value":"Rock",
    },
    {
      "id":9,
      "value":"Nature",
    }

  ])
  return (
    <>
      <div  data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0"
       className="container mt-3 pt-2 d-flex justify-content flex-row  "> 
       {list.map((l) => 
              <button id="#list-example" className='bg-secondary text-white ps-3 pe-3 m-2 border-0 rounded-3'>{l.value}</button>
            )}

         </div>
    </>
  )
}
