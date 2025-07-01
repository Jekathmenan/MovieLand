import React from "react";
import { useState } from 'react'
import SearchIcon from '../search.svg';

const Search = ({ searchMovies }) => {
    const [searchKey, setSearchKey] = useState("");
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (searchKey.trim()) {
                searchMovies(searchKey.trim());
            }
        }
    };

    const handleInputChange = (e) => {
        setSearchKey(e.target.value)
    }

    return (<div className="search">
        <input
            placeholder="Search for Movies"
            value={searchKey}
            onChange={(e) => handleInputChange(e)}
            onKeyDown={handleKeyDown}
        />

        <img
            src={SearchIcon}
            alt="Search"
            onClick={() => { searchMovies(searchKey) }}
        />
    </div>);
}

export default Search;