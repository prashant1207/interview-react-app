
import React from "react";
import { withRouter } from 'react-router-dom';
import './home.page.css';

function Home({ history }) {
    return (
        <div className="Home">
            Home
        </div>
    );
}

export default withRouter(Home);
