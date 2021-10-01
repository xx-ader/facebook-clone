import React from 'react'
import '../SideBar.css'
import { SideBarRow } from './SideBarRow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './ContextProv';

const SideBar = () => {

    const [{user},dispatch] = useStateValue(); 

    return (
        <>
           <div className='side_bar'>
               <SideBarRow  src={user.photoURL} 
               title={user.displayName} />
<SideBarRow Icone={LocalHospitalIcon}  title='COVID-19 Information Center'/>
<SideBarRow Icone={EmojiFlagsIcon}  title='Pages'/>
<SideBarRow Icone={PeopleIcon}  title='Friends' />
<SideBarRow Icone={ChatIcon}  title='Messenger' />
<SideBarRow Icone={StorefrontIcon}  title='MarketPlace' />
<SideBarRow Icone={VideoLibraryIcon}  title='Videos' />
<SideBarRow Icone={ExpandMoreIcon}  title='MarketPlace' />
               
           </div>
        </>
    )
}

export default SideBar
