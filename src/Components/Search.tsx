import React, { Component } from "react";
import ApiService from "../libs/ApiService";
import { Input } from "antd";
import "../css/Search.css";
const { Search } = Input;
interface SearchProps {
  onSearch: Function;
  searchResult: any[];
}
export default class SearchComponent extends Component<any, any> {
  private dropdown: React.RefObject<any>;
  constructor(props: Readonly<SearchProps>) {
    super(props);
    this.state = {
      searchInput: "",
      focusIn: false,
      searchResult: props.searchResult
    };
    this.dropdown = React.createRef();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event: any) => {
    if (
      this.dropdown.current &&
      !this.dropdown.current.contains(event.target)
    ) {
      this.onFocus(false);
    }
  };
  
  UNSAFE_componentWillReceiveProps(props:any){
    this.setState({ searchResult: props.searchResult });
  }

  onInputChange(value: string) {
    const {  searchResult} = this.props;
    const filterResult = searchResult.filter((v:any) => v.login.toLowerCase().indexOf(value.toLowerCase()) > -1).slice(0, 10)
    this.setState({ searchInput: value, searchResult: filterResult });
  }

  async onSearch(e: any) {
    const { onSearch, searchResult, searchedExistingUser } = this.props;
    const user = searchResult.find(
      (data: any) => data.login.toLowerCase() === e.toLowerCase()
    );
    if (user) {
      searchedExistingUser(user);
    } else {
      try {
        const user:any = await ApiService.searchUser("/users/" + e);
        console.log(user);
        let repos: any = await ApiService.searchRepo(user.repos_url);
        const filteredRepo = repos.sort(
            (a:any, b:any) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count)
          ).slice(0,5)
        onSearch({...user, repos:filteredRepo});
      } catch (e) {
        console.log("Error:", e);
      }
    }

    this.setState({
      searchInput: ""
    });
  }

  onDropDownItem = (value:any) => {
    const { searchedExistingUser } = this.props;
    searchedExistingUser(value)
      this.setState({ focusIn: false});
  }
  onFocus = (value: boolean) => {
    this.setState({ focusIn: value });
  };
  render() {
    const { searchInput, focusIn, searchResult } = this.state;    
    return (
      <div className="search" ref={this.dropdown}>
        <Search
          onFocus={() => this.onFocus(true)}
          enterButton="Search"
          style={{ width: 300 }}
          placeholder="Search by username"
          onChange={e => this.onInputChange(e.target.value)}
          value={searchInput}
          onSearch={this.onSearch}
        />

        {focusIn && searchResult && searchResult.length > 0 && (
          <div className="dropdown-autocomplete">
            {searchResult.map((data: any, i: number) => {
              return (
                <div 
                  className="dropdown-item"
                  onClick={() => this.onDropDownItem(data)}
                >
                  {data.login}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
