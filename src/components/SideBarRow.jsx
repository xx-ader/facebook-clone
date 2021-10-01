import { Avatar } from '@mui/material'
import React from 'react'
import '../sideBarRow.css'
export const SideBarRow = ({title, Icone , src}) => {
    return (
        <>
        <div className="side_bar_row">

            {src && <Avatar src={src} />}
            {Icone && <Icone />}
            <h4>{title}</h4>
            
            
            </div>
           
        </>
    )
}
