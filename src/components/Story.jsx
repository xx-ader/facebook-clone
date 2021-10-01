import { Avatar } from '@mui/material'
import React from 'react'
import '../story.css'
export const Story = ({src , name , profilePicture}) => {
    return (
        <>
        <div style={{backgroundImage: `url(${src})`}} className='story'>
            <Avatar className='story_avatar' src={profilePicture} />
            <h4>{name}</h4>
            </div>
        </>
    )
}
