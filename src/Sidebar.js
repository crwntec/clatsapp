import React, { useState, useEffect } from 'react';
import SidebarChat from './SidebarChat';
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import db from "./firebase"

import './Sidebar.css'
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc  => 
                ({
                    id: doc.id,
                    data: doc.data()
                }))   
            ))
        );

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className="avatar"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start a new Chat" type="text"/>
                </div>
            </div>

            <div className="sidebar_Chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} rname={room.data.name } />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
