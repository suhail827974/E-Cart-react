import React from 'react'
import './Spinner.css'

function Spinner() {
  return (
    <div style={{position:"absolute",width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div className="custom-loader"
              style={{position:"absolute",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}
        ></div>
    </div>
  )
}

export default Spinner