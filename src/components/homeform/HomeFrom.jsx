import React from 'react'
import './Homefrom.css'

const HomeFrom = () => {
  return (
    <>
    
     <div className="container">
          <form className='form-home'>
            <input type="text" placeholder="Search" />
            <button type="submit">
                search
            </button>
          </form>
    </div>
        
</>
  )
}

export default HomeFrom