import React from 'react'

export default function ImprovedCard({title, director, hasOscars}) {
  return (
    <div>
      <h2>{title}</h2>
      Director: {director}
      <br/>
      {hasOscars && <p>🥇</p>}
    </div>
  )
}
