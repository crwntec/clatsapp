import React, { useEffect, useState } from 'react'
import "./Chat.css"
import Avatar from '@material-ui/core/Avatar';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import { IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
    const [input, setInput] = useState('')
    const [seed, setSeed] = useState('')
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('')

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (
                setRoomName(snapshot.data().name))
            )
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))

    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("U typed >>> ", input);

        setInput("");
    }

    return (
        <div className="Chat">
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
        

            <div className="chat_body">
                <p className={`chat_msg ${true && 'chat_reciever'}`}>
                    <span className="chat_name">John</span> 
                    Hey!
                    <span className="chat_time">3:15PM</span>   
                </p>
            </div>

            <div className="chat_footer">
                
                <InsertEmoticonIcon />
                <form >
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type Message"/>
                    <button onClick={sendMessage} type="submit">Send!</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat
