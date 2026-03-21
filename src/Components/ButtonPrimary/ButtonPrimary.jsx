import React from 'react';

const ButtonPrimary = ({ theme, onClick, children}) => {
    return (
        <button 
        onClick={onClick} 
        className={`btn btn-outline w-28 ${theme}`}
        >{children}</button>
    );
};

export default ButtonPrimary;