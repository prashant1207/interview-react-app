
import React from "react";
import { withRouter } from 'react-router-dom';
import Chatbox from '../components/chatbox/chatbox.component';
import Friends from '../components/friends/friends.component';
import MessageList from '../components/messageList/message-list.component';
import './chatroom.page.css';

function Chatroom({ history }) {
    return (
        <div className="chatroom">
            <Chatbox></Chatbox>
            <Friends></Friends>
            <MessageList></MessageList>
        </div>
    );
}

export default withRouter(Chatroom);
