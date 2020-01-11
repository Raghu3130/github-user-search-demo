import * as React from "react";
import { Component } from "react";
import { Input } from "antd";
import ApiService from "../libs/ApiService";
import Search from "./Search";
import UserCard from "./UserCard";
import SearchHistory from "./SearchHistory";

class Dashboard extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchResult: [],
      currentUser: null
    };
    this.onSearch = this.onSearch.bind(this);
  }

  searchedExistingUser = (user: any) =>{
    this.setState({ currentUser: user });
  }

  async onSearch(user: any) {
    let { searchResult, currentUser } = this.state;
    try {
      if (user) {
        currentUser = user;
        if (searchResult.length > 0) {
          const index = searchResult.findIndex(
            (data: any) => data.id === user.id
          );
          if (index === -1) {
            searchResult.push(user);
          }
        } else {
          searchResult.push(user);
        }
      }
      this.setState({ searchResult, currentUser, inputValue: "" });
    } catch (e) {
      console.log("Error:", e);
    }
  }

  render() {
    const { searchResult, currentUser } = this.state;
    console.log(currentUser);
    return (
      <div>
        <Search searchedExistingUser={this.searchedExistingUser}  onSearch={this.onSearch} searchResult={searchResult} />
        <div style={{display:"flex", padding: "20px"}}>
            <div>
                <SearchHistory searchResult={searchResult} onUserClick={this.searchedExistingUser}/>
            </div>
            
            {
                currentUser && <UserCard selectedUser={currentUser} />
            }     
        </div>
           
      </div>
    );
  }
}

export default Dashboard;
