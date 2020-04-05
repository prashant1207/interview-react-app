import React from "react";
import './user-selector.component.css';

function UserSelector({ onSelect, users }) {
    function renderButtons() {
        let items = users.map((user, idx) => <button className='user-button' key={idx} onClick={e => onSelect(user)}>{user.name}</button>)
        return <div>{items}</div>
    }

    return (
        <>
            {
                users && users.length > 0 ? renderButtons() : <p>No users</p>
            }
        </>
    );
}

export default UserSelector;
