import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const VideoCard = ({video, name, channel, views, time}) => {    
  return (
    <div className='container m-1 p-1'>
        <div className='container  p-2 m-2 rounded-3 ' >
        <img className='justify-content-center rounded-2 ' 
        src={video} class="rounded" alt="..."/>
        </div>
        <div className='d-flex flex-row m-1 ms-3'>
        <div>
        <FontAwesomeIcon icon={faUser} className='bg-white text-black rounded-5 p-2'/>
        </div>
        <div className='ms-4 text-white'>
        <h3 className='text-white fw-bold '>{name}</h3>
        <h5 className='fw-light mt-1'>{channel}</h5>
        <h6 className='fw-light mt-1'>{views} . {time}</h6>
        </div>
        </div>
    </div>
  )
}
