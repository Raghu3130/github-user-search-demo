import React from "react";
import "../css/SearchHistory.css";

const SearchHistory = ({searchResult, onUserClick}:any) => {
    return(
        <div className="search-history-container">
            <div className="search-history-table">
                <div className="sh-title"> Search History</div>
                { (Array.isArray(searchResult) && searchResult.length > 0) &&
                    searchResult.map((user:any) => {
                    return <div className="sh-history" onClick={()=>onUserClick(user)}><strong> {user.login}</strong></div>
                    })
                ||
                <span className="no-sh-title">No search history</span>                
                }
            </div>
        </div>
    )
}

export default SearchHistory;