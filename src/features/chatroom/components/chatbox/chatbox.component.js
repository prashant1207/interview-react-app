import React from "react";
import './chatbox.component.css';

function Chatbox({ user, dispatch }) {
    function onkeydown(e) {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
            let text = e.target.value;
            dispatch({ type: 'add', message: text, user: user });
            e.target.value = '';
        }
    }

    return (
        <div className='chatbox'>
            <input onKeyDown={e => onkeydown(e)} className='input-box'></input>
            <p className='note'>Press enter to send the message</p>
        </div>
    );
}

export default Chatbox;