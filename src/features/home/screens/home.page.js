
import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import UserSelector from '../../common/components/userSelector/user-selector.component'
import Interactor from '../../../helper/interactor/app.interactor';
import './home.page.css';

function Home({ dispatch, history }) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        let users = await Interactor.fetchAllUsers();
        if (users.length > 0) {
            dispatch({ type: 'update', user: users[0] })
        }

        setUsers(users);
    }

    function onUserSelect(user) {
        dispatch({ type: 'update', user: user })
        history.push('/chatroom')
    }


    function renderUserSelection() {
        return <UserSelector users={users} onSelect={onUserSelect} />
    }

    return (
        <div className="Home">
            <h1>{Interactor.appName()}</h1>
            <h3>Select user</h3>
            {
                users.length > 0 ? renderUserSelection() : null
            }
        </div>
    );
}

export default withRouter(Home);
