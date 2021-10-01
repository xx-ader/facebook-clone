import React from 'react'
import "../Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ForumIcon from '@mui/icons-material/Forum';  
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {  IconButton } from '@mui/material';
import { useStateValue } from './ContextProv';

const Header = () => {

    const [{user},dispatch] = useStateValue(); 

    return (
        <>
            <header className='Header'>
                <div className='h_left'>

                    <img src={'https://vectorsbazar.com/assets/images/products/Facebook_round_ico.jpg'} alt="" />
                   <div className="search">
                   <SearchIcon  />
                    <input placeholder='Search Facebook' type="text" />
                   </div>
                   
                    
                    
                </div>


              <div className='h_center'> 
              <div className="h_option h_option_active"><HomeIcon /></div>
              <div className="h_option"><FlagIcon /></div>
              <div className="h_option"><SubscriptionsIcon /></div>
              <div className="h_option"><StorefrontIcon /></div>
              <div className="h_option"><SupervisedUserCircleIcon /></div>
              
               </div>


                <div className='h_info'> 
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
                </div>

                <div className='right_icones'>
                    <div className="righticones_option"><IconButton><AddIcon /></IconButton></div>
                    <div className="righticones_option"><IconButton><NotificationsActiveIcon /></IconButton></div>
                    <div className="righticones_option"><IconButton><ForumIcon /></IconButton></div>
                    <div className="righticones_option"><IconButton><KeyboardArrowDownIcon /></IconButton></div>


                    


                
                </div>
            </header>
        </>
    )
}

export default Header