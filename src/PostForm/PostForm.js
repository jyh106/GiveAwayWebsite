import React, { Component } from 'react';
import "./PostForm.css";

class PostForm extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    getDate(){
        let date = new Date();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        return month + "/" + day + "/" +  year;
    }
    render() {
        return(
            <div className="postForm">
                <div className="form_header">
                    I Want To Give Away: 
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        Title:
                    </div>
                    <input className="input_title"></input>
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        Address(StreetName):
                    </div>
                    <input className="input_streetName" ></input>
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        Address(apt): 
                    </div>
                    <input className="input_apt"></input>
                </div>
                    

                <div className="postForm_question">
                    <div className="titles">
                        City: 
                    </div>
                    <input className="input_city"></input>
                </div>
                

                <div className="postForm_question">
                    <div className="titles">
                        Note: 
                    </div>
                    <textarea className="input_notes"></textarea>
                </div>

                <div className="post_date">
                    {this.getDate()}
                </div>

            </div>
        )
    }
}

export default PostForm;


