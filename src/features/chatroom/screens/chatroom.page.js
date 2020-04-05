
import React, { useReducer, useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import Chatbox from '../components/chatbox/chatbox.component';
import Friends from '../components/friends/friends.component';
import MessageList from '../components/messageList/message-list.component';
import Interactor from '../../../helper/interactor/app.interactor';
import Reducer from '../../../helper/reducer/app.reducer';
import './chatroom.page.css';
const reducer = new Reducer()

function Chatroom({ user, history }) {
    const [messageState, messageDispatch] = useReducer(reducer.messages, []);
    const [friendState, friendDispatch] = useReducer(reducer.friend, null);
    const [greetingMessage, setGreetingMessage] = useState(user.name)

    useEffect(() => {
        if (friendState) {
            fetchMessages();
        }
    }, [friendState])

    async function fetchMessages() {
        let messages = await Interactor.fetchMessages(user, friendState);
        messageDispatch({ type: 'update_all', messages: messages })
        setGreetingMessage(user.name + ' and ' + friendState.name);
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
                <button onClick={e => history.push('/')}>Go Home</button>

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
            <MessageList user={user} messages={messageState} />
            <br />

            <Chatbox user={user} dispatch={messageDispatch} />
        </div>
    );
}

export default withRouter(Chatroom);
