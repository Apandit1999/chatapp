import React, { useContext } from 'react';
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const {data} = useContext(ChatContext);

  return (
    <div className='chat'>
    <div className='chatInfo'>
    <span>{data.user?.displayName}</span>
    <div className='chatIcons'>
    <div className='chatIcons1'><VideoCallIcon/></div>
    <div className='chatIcons2'>  <PersonAddIcon/></div>   
    <div className='chatIcons3'><MoreHorizRoundedIcon/></div>   
    </div> 
    </div>
    <Messages/>
    <Input/>
    </div>
    
  )
}

export default Chat;
