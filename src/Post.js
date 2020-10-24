import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
            < Avatar
            className="post__avatar"
            alt="avatar"
            src="/static/images/avatar/1.jpg"
            
            
            />
            <h3>Username</h3>

            </div>
        

            <img className="post__image" src="https://bit.ly/37yQ9vu"

            alt=""

            />
            <h4 className="post__text"><strong>luqqy</strong> Nice pic</h4>
            

        </div>
    )
}

export default Post
