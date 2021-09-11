import React from "react";





function SearchBox({placeholder,handlechange}) {
    return (
        <>
      
        <input 
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange={handlechange}
        />

  
        </>
    )
}


export default SearchBox;
