import React, { useContext } from "react";
import "./style.css";
import EmployeeAreaContext from "../../utils/EmployeeAreaContext";

const Search = () => {
  const context = useContext(EmployeeAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group">
          
          <input
          className="form-control"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        <div class="input-group-append">
          <button class="btn" type="button">Button</button>
        </div>
      </div>
    </div>
  );
}
export default Search;
