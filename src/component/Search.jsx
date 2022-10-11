import { useEffect, useState } from "react";
import { SearchTokenAction } from "../store/SearchTokenReducer";
import Store from "../store/Store";

const Search = () => {
    const [SearchItem, setSearchItem] = useState("");
    const [StartSearch, setStartSearch] = useState(0);
    
    useEffect(() => {
        Store.dispatch(SearchTokenAction(SearchItem.toLowerCase()));
    }, [StartSearch])
    
  return (
    <div className="search-wrapper">
        <label htmlFor="search">Search Users</label>
        <input type="search" id="search" onChange={e => setSearchItem(e.target.value)} />
        <button className="StartSearch" onClick={()=>setStartSearch(!StartSearch)} >Start Search</button>
        
    </div>
  )
}

export default Search