
import React, { useReducer, useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { Chatbox, Friends, MessageList } from '../components';
import { Interactor, Reducer } from '../../../helper';
import './chatroom.page.css';
const reducer = new Reducer()

function Chatroom({ user, history }) {
    const [messages, messageDispatch] = useReducer(reducer.messages, []);
    const [friend, friendDispatch] = useReducer(reducer.friend, null);
    const [greetingMessage, setGreetingMessage] = useState(user.name);

    useEffect(() => {
        if (friend) {
            fetchMessages();
        }
    }, [friend])

    useEffect(() => {
        Interactor.updateStorage(user, friend, messages);
    }, [messages])

    async function fetchMessages() {
        let messages = await Interactor.fetchMessages(user, friend);
        messageDispatch({ type: 'update_all', messages: messages })
        setGreetingMessage(user.name + ' and ' + friend.name);

    }

    function updateChat() {
        Interactor.streamChat(messageDispatch, friend);
    }

    useEffect(() => {
        if (!user.id) {
            history.push('/')
        }
    }, [])

    return (
        <div className="chatroom">
            <div className='header'>
                <h2>{Interactor.appName()}</h2>
                <div>
                    <button onClick={e => updateChat()}>Update</button>
                    <button onClick={e => history.push('/')}>Go Home</button>
                </div>
            </div>

            <div className='friend-list-container'>
                <h3>{greetingMessage}</h3>
                <div>
                    <h3>Select Friends</h3>
                    {
                        user.friends ? <Friends friends={user.friends} dispatch={friendDispatch} /> : null
                    }
                </div>
            </div>
            <br />
            <MessageList user={user} messages={messages} />
            <br />

            <Chatbox user={user} dispatch={messageDispatch} />
        </div>
    );
}

export default React.memo(withRouter(Chatroom));
