import React from 'react';

const CounterDisplay = ({ name, color }) => {
    return (
        <div className='p-5 bg-white border border-base-300 rounded-lg'>
            <p className='mb-2'>{name}</p>
            <p className={`font-bold text-2xl ${color}`}>0</p>
        </div>
    );
};

export default CounterDisplay;