// friends.jsx
import React, { useState ,useRef,useEffect} from 'react';
import '../Scss/Group.scss';
import search1 from "../image/search1.png";
import { useAuth } from '../store/Auth';
import Welcome from '../Components/ChatArea/Welcome.jsx'
import GroupChatContainer from '../Components/ChatArea/GroupChatContainer.jsx'
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Modal from "../Components/mainArea/GroupCreate.jsx"
import Modal2 from "../Components/mainArea/GroupUpdate.jsx"

  