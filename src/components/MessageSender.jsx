import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "../messageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./ContextProv";
import firebase from "../Firebase/firebase";
import db from "../Firebase/firebase";


export const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();

  const [txt, setTxt] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const submitBtn = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: txt,
      timeStamp:Date.now(),
      profilPicture: user.photoURL,
      image: imgUrl,
      userName: user.displayName,
    });

    setTxt("");
    setImgUrl("");
  };

  


  return (
    <>
      <div className="message_sender">
        <div className="sender_top">
          <form onSubmit={submitBtn}>
            <Avatar src={user.photoURL} />
            <input
              value={txt}
              onChange={(e) => {
                setTxt(e.target.value);
              }}
              className="msg_input"
              placeholder={`what'up ${user.displayName}`}
              type="text"
            />
            <input
              value={imgUrl}
              onChange={(e) => {
                setImgUrl(e.target.value);
              }}
              //className='img_input msg_input'
              placeholder="IMAGE Url (optional) !"
              type="url"
            />

            <button
              className="message_sender_btn"
           
              type="submit"
            >
              do you see me?
            </button>
          </form>
        </div>

        <div className="sender_bottom">
          <div className="msg_option">
            <VideocamIcon style={{ color: "red" }} />
            <h3>Live video</h3>
          </div>
          <div className="msg_option">
            <PhotoLibraryIcon style={{ color: "green" }} />
            <h3>Photo/Video</h3>
          </div>
          <div className="msg_option">
            <InsertEmoticonIcon style={{ color: "orange" }} />
            <h3>Feeling/Activity</h3>
          </div>
        </div>
      </div>
      <img src={imgUrl} alt="" />
    </>
  );
};
