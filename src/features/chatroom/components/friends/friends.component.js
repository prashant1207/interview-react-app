import React, { useState, useEffect } from "react";
import UserSelector from '../../../common/components/userSelector/user-selector.component';
import Interactor from '../../../../helper/interactor/app.interactor';
import './friends.component.css';

function Friends({ friends, dispatch }) {
    const [friendList, setFriendList] = useState([])

    useEffect(() => {
        fetchFriendList();
    }, [friends])

    async function fetchFriendList() {
        let friendList = await Interactor.fetchUsers(friends);
        if (friendList.length > 0) {
            selectUser(friendList[0]);
        }

        setFriendList(friendList);
    }

    function selectUser(user) {
        dispatch({ type: 'select', user: user })
    }

    function renderList() {
        return <UserSelector users={friendList} onSelect={selectUser} />
    }

    return (
        <div className='friend-list'>
            {
                friends && friendList.length > 0 ? renderList() : <p>Waiting for friend list</p>
            }
        </div>
    );
}

export default Friends;