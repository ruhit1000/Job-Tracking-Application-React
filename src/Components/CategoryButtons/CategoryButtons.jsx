import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const CategoryButtons = () => {
    return (
        <div className='flex gap-2'>
            <ButtonPrimary theme={'btn-info'} buttonName={'All'}></ButtonPrimary>
            <ButtonPrimary theme={'btn-info'} buttonName={'Interview'}></ButtonPrimary>
            <ButtonPrimary theme={'btn-info'} buttonName={'Rejected'}></ButtonPrimary>
        </div>
    );
};

export default CategoryButtons;