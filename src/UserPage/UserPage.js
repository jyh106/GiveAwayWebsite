import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./UserPage.css"; 

class UserPage extends Component{ 
    render(){
        return (
            <div className="userPage">
                <div className="backButton">
                    <Link to="/">Back</Link>
                </div>
                myPage
            </div>
        )
    }
}

export default UserPage;