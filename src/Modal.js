import React from 'react';

const MODAL_STYLES ={
    position:'fixed',
    top:'50%',
    height:'50vh',
    width:'30vw',
    left:'50%',
    transform:'translate(-50%, -50%)',
    backgroundColor:'#FFF',
    padding:'50px',
    zIndex:999,
}
const OVERLAY_STYLE ={
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex:999,
}

const Modal = ({open, children, onClose}) =>{
    if(!open) return null
    return(
    <>
        <div style={OVERLAY_STYLE} />
        <div style={MODAL_STYLES}>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </div>
        
        </>)
}

export default Modal;