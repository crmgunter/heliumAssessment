import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Home Page!</h1>
                <Link to="/employees">See all employees</Link>
            </div>
        );
    }
}

export default LandingPage;