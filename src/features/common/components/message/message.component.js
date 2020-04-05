import React from "react";
import './message.component.css';

function Message({ message, isSelf }) {
    function formatDate(timestamp) {
        let date = new Date(timestamp);
        return date.toLocaleString();
    }
    return (
        <div className='message-container' style={{ alignItems: isSelf ? 'flex-end' : 'flex-start' }}>
            <div className='element' style={{ backgroundColor: isSelf ? '#0364b7' : 'crimson', textAlign: isSelf ? 'right' : 'left' }}>
                <p className='text'>{message.text}</p>
            </div>
            <p className='sender'>{message.user.name} at {formatDate(message.timestamp)}</p>
        </div>
    );
}

export default Message;