// friends.jsx
import React, { useState ,useRef,useEffect} from 'react';
import '../Scss/Chat.scss';
import room from "../image/icons8-video-call-50 (1).png";
import { useAuth } from '../store/Auth';
import {io} from "socket.io-client"
import Welcome from '../Components/ChatArea/Welcome.jsx'
import ChatContainer from '../Components/ChatArea/ChatContainer.jsx'
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import RoomPop from "../Components/mainArea/RoomPopUp.jsx"

  