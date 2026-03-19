import React from 'react';
import Badge from '../Badge/Badge';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import DeleteButton from '../DeleteButton/DeleteButton';

const JobPostCard = () => {
    return (
        <div className='flex justify-between bg-white p-6 rounded-lg border border-base-300'>
            <div>
                <h2 className='text-[#002c5c] font-semibold text-lg'>company_name</h2>
                <p className='text-gray-500'>position</p>
                <p className='my-5 text-gray-500'>work_location | job_type | salary_range</p>
                <Badge></Badge>
                <p className='text-[#323B49] mb-5'>discipline</p>
                <div className='flex gap-2'>
                    <ButtonPrimary theme={'btn-success'} buttonName={'INTERVIEW'}></ButtonPrimary>
                    <ButtonPrimary theme={'btn-error'} buttonName={'REJECTED'}></ButtonPrimary>
                </div>
            </div>
            <DeleteButton></DeleteButton>
        </div>
    );
};

export default JobPostCard;