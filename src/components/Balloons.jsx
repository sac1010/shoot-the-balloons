import React from 'react'

const Balloons = ({color, num}) => {
    
  return (
    <div style={{width:"100px", height:"100px", borderRadius:'50%', background:color, display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div>{num}</div>
    </div>
  )
}

export default Balloons