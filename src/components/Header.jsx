import React from 'react'
import nba from "./images/nba"
const Header = () => {
  return (
    <div>
        <div className="logo d-flex justify-content-center mb-3">
        <img src={nba} alt="NBA" />
        </div>
        <div className="title text-center fs-1 fw-bold">
            <h1>NBA LEGENDS</h1>
        </div>
        <div className="logo d-flex justify-content-center m-3">
            <input className='w-50 border rounded' type="text" name="name" value="" placeholder="Search Player" />
        </div>
    </div>
  )
}

export default Header