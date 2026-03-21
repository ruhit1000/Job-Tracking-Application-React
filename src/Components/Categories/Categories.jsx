import React from 'react';
import CategoryButtons from '../CategoryButtons/CategoryButtons';

const Categories = (props) => {
    return (
        <section className="flex justify-between">
            <div>
                <h2 className="text-[#002c5c] font-semibold text-xl mb-6">Available Jobs</h2>
                <CategoryButtons {...props} ></CategoryButtons>
            </div>
            <div>
                <p className="text-[#64748b] font-medium">

                </p>
            </div>
        </section>
    );
};

export default Categories;