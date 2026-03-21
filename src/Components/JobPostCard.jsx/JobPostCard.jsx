import React from 'react';
import Badge from '../Badge/Badge';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import DeleteButton from '../DeleteButton/DeleteButton';

const JobPostCard = ({ jobInfo }) => {
    return (
        <div className='flex justify-between bg-white p-6 rounded-lg border border-base-300'>
            <div>
                <h2 className='text-[#002c5c] font-semibold text-lg'>{jobInfo.company_name}</h2>
                <p className='text-gray-500'>{jobInfo.position}</p>
                <p className='my-3 text-gray-500'>{jobInfo.work_location} | {jobInfo.job_type} | {jobInfo.salary_range}</p>
                <Badge></Badge>
                <p className='text-[#323B49] my-3'>{jobInfo.discipline}</p>
                <div className='flex gap-2'>
                    <ButtonPrimary theme={'btn-success'}>INTERVIEW</ButtonPrimary>
                    <ButtonPrimary theme={'btn-error'}>REJECTED</ButtonPrimary>
                </div>
            </div>
            <DeleteButton></DeleteButton>
        </div>
    );
};

export default JobPostCard;