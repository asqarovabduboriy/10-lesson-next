import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <>
        {
            Array(4).fill(1).map((_,i) => <div className="loader" key={i}></div>)
        }
    </>
  )
}

export default Loading