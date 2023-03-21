import React from "react";

function Search({search, onSetSearch}){

    return (
        <div className="search-bar">
            <span>Search:  </span>
            <input
                type="text"
                name="search"
                placeholder="Search Positions..."
                autoComplete="off"
                value={search}
                onChange={(e) => onSetSearch(e.target.value)}
            />
             <hr/>
        </div>
    )
}

export default Search;