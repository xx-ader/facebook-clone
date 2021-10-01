import { Avatar } from '@mui/material'
import React from 'react'
import '../post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import firebase from 'firebase'
import db from "../Firebase/firebase";

export default function Post({id ,profilPicture, image ,userName,timeStamp,message}) {

    const dlt_btn = ()=>{
        db.collection('posts').doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return (
        <>
        <div className="post">

            <div className="post_top">
               <div className="left_top_post">
                <Avatar src={profilPicture} className='post_avatar' />
                <div className="post_info">
                    <h4>{userName}</h4>
                    <p>{new Date(timeStamp).toUTCString()}</p>  
                </div>
                </div>
                <button onClick={dlt_btn} className="right_top_post">
                    <DeleteIcon />
                </button>

            </div>

            <div className="post_msg">
                <p>{message}</p>
            </div>

            <div className="post_img">
                <img src={image} alt="" />
            </div>

            <div className="options_post">

                <div className="like_option option_post">
                <ThumbUpIcon />
                    <p>Like</p>
                    
                </div>

                <div className="comment_option option_post">
                <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                   
                </div>
                <div className="share_option option_post">
                <TelegramIcon />
                    <p>Share</p>
                   
                </div>
                <div className="share_option option_post">
                <MoreVertRoundedIcon />
                
                   
                </div>
            </div>
        </div>
            
        </>
    )
}
