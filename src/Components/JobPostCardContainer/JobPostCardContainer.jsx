import React, { use } from 'react';

const JobPostCardContainer = ({ jobDataPromise }) => {
    const jobDataRes = use(jobDataPromise);
    const jobData = jobDataRes.data;
    console.log(jobData)
    return (
        <div className="py-8 space-y-2">

        </div>
    );
};

export default JobPostCardContainer;