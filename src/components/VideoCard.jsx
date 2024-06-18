import React, { useState } from 'react'
import { Video } from './Video'

export const VideoCard = () => {
    const [videoInfo, setVideoInfo] = useState([])
  return (
    <div>
        <Video/>
        <div>
        <h3> video 1 | learn | Part 1</h3>
        <h5>channel name</h5>
        <h6>1M views . 2 years ago</h6>
        </div>
    </div>
  )
}
