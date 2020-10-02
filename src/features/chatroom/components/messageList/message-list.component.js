import React, { useEffect, useRef } from "react";
import { Message } from '../../../common/components';
import './message-list.component.css';

function MessageList({ user, messages }) {
    const messagesEndRef = useRef()

    function renderList() {
        return messages.map((message, idx) => <Message isSelf={message.user.id === user.id} key={idx} message={message} />)
    }

    useEffect(() => {
        messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }, [messages])

    return (
        <div className='message-list' ref={messagesEndRef}>
            {
                messages && messages.length > 0 ? renderList() : <p>No Messages</p>
            }
        </div>
    );
}

export default React.memo(MessageList);