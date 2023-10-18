import React, { useState } from "react";

const Dropdown = ({dropDown,GetStockId}) => {

  const dropdownHandleChange = (e) => {
    GetStockId(e.target.value)
  };
 
  return (
    <>
      <div class="dropdown my-4 text-center">
      <h4 className="fst-normal my-4">select stock</h4>
        <select onChange={dropdownHandleChange} style={{width:"80%"}} className="select">
          {dropDown.map((E) => (
            <option value={E._id} label={E.stockName}>
              E.stockName
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
