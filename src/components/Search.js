import React from "react";

function Search(){

    return (
        <nav>
            <h2>Search</h2>
            <input
             type="text"
             name="search"
             placeholder="Search..."
             autoComplete="off"
            //  value={search}
            //  onChange={e => onSearchChange(e.target.value)}
             />
             <hr/>
        </nav>
    )
}

export default Search;