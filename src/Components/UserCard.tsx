import React, { Component } from "react";
import "../css/Usercard.css";



const UserCard = ({selectedUser}:any) => {
    return(
        <div className="usercard-container">
            <div className="user-details">
                <div className="avatar">
                    <img src={selectedUser.avatar_url}></img>
                </div>
                <div className="user-name">
                    <span>{selectedUser.name}</span>
                </div>
            </div>
            <div className="repo-container">
                <label>Repositories</label>
                <div className="repo-cards">
                    {
                        selectedUser.repos.map((repo: any) => {
                            return (
                                <div className="repo-card">
                                    <div className="repo-name">
                                        {repo.name}
                                    </div>
                                    <div className="repo-star-count">
                                        Star count: <strong>{repo.stargazers_count}</strong>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>

        </div>
    )
}

export default UserCard;