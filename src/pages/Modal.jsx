// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

const Modal = ({open, setOpen, children}) => {
    // eslint-disable-next-line no-unused-vars
    console.log(open)
    console.log("outside", open)
  return (
    ReactDOM.createPortal(
        <div>
            {open && <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          width: '700px',
          minHeight:'400px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          zIndex: 200, // Make sure it appears above other elements
        }} className=''>
            <div style={{height:'320px', overflow:'auto', marginBottom:'20px'}}>{children}</div>
            <button style={{textAlign:'center', background:'rgb(20,219,20)', color:'white', borderRadius:'8px', minWidth:'100px', boxShadow:'2px 4px 8px black'}} onClick={()=>setOpen(false)}>Close</button>
        </div>}
        </div>
    , document.getElementById('modal'))
  )
}

export default Modal