import React from 'react';

const ButtonPrimary = ({buttonName, theme}) => {
    return (
        <button className={`btn btn-outline w-28 ${theme}`}>{buttonName}</button>
    );
};

export default ButtonPrimary;