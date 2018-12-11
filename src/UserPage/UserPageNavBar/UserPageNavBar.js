import React, { Component } from 'react';

class UserPageNavBar extends Component {
    renderFilterMenu() {
        return (
            <div className="filterOptions">
                <div className="filterOptions_Date">Date</div>
            </div>
        )
    }
    render() {
        return (
            <div className="userPageNavBarContainer">
                <div className="filterMenu">

                </div>
            </div>
        )
    }
}

export default UserPageNavBar;