import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./UserPage.css"; 

class UserPage extends Component{ 
    render(){
        return (
        <BrowserRouter>
            <div className="userPage">
                <div className="backButton">
                    <a href="/">Back</a>
                </div>
                myPage
            </div>
        </BrowserRouter>
        )
    }
}

export default UserPage;