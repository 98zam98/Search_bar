import React from 'react'

const Card = (x) => {
  return (
    
    <div className="card">
      <div className="header">{x.Header}</div>
      <div className="body" >{x.Body}</div>
    </div>
  )
}

export default Card