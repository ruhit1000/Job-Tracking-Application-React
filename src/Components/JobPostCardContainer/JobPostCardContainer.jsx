import React from 'react';
import JobPostCard from '../JobPostCard.jsx/JobPostCard';

const JobPostCardContainer = ({ jobData }) => {
    return (
        <div className="py-8 space-y-2">
            {
                jobData.map((jobInfo, index) => <JobPostCard key={index} jobInfo={jobInfo}></JobPostCard>)
            }
        </div>
    );
};

export default JobPostCardContainer;