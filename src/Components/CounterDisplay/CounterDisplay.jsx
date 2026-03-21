import React from 'react';

const CounterDisplay = ({ color, counter, children }) => {
    return (
        <div className='p-5 bg-white border border-base-300 rounded-lg'>
            <p className='mb-2'>{children}</p>
            <p className={`font-bold text-2xl ${color}`}>{counter}</p>
        </div>
    );
};

export default CounterDisplay;