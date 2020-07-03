import React from 'react';

function setPageState(setFunction, value){
    setFunction(value)
}

const Navbar = (props) => {
    if (props.page===0){
        return (
            <div className="navbar">
                <button className='navbutton navbuttonpressed'
                onClick={() => setPageState(props.setPage, 0)}>
                    Timeline
                </button>
                <button className='navbutton'
                onClick={() => setPageState(props.setPage, 1)}>
                    Stats
                </button>
            </div>  
            );
    }
    else{
        return (
            <div className="navbar">
                <button className='navbutton'
                onClick={() => setPageState(props.setPage, 0)}>
                    Timeline
                </button>
                <button className='navbutton navbuttonpressed'
                onClick={() => setPageState(props.setPage, 1)}>
                    Stats
                </button>
            </div>  
            );
    }

    
}
 
export default Navbar;