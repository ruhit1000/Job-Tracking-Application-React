import React from 'react';
import CounterDisplay from '../CounterDisplay/CounterDisplay';

const Header = ({ totalJobs, interviewJobs, rejectedJobs }) => {
    return (
        <header className="w-[95%] sm:max-w-6xl mx-auto pt-4 sm:pt-14">
            <h1 className="font-bold text-[2rem] my-5 text-[#002c5c]">Job Application Tracker</h1>
            <div className="grid grid-cols-3 gap-4 pb-7">
                <CounterDisplay color='text-[#002c5c]' counter={totalJobs.length}>Total</CounterDisplay>
                <CounterDisplay color='text-[#10b981]' counter={interviewJobs.length}>Interview</CounterDisplay>
                <CounterDisplay color='text-[#ef4444]' counter={rejectedJobs.length}>Rejected</CounterDisplay>
            </div>
            <hr className="border-base-300" />
        </header>
    );
};

export default Header;