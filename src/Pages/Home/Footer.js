import React from 'react'

function Footer() {
    return (
        <div className="w-100 p-2 mt-5 d-flex" style={{background:'#222', color:'white', fontSize:12, justifyContent:'flex-start' }}> 
            <span>© Cifyr, 2021</span>
            <span className="ml-3">For any query, please reach out to us at : <a href="mailto://help@cifyr.xyz" style={{color:"lightblue"}}> help@cifyr.xyz </a> </span>
        </div>
    )
}

export default Footer
