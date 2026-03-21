import React from 'react';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

const CategoryButtons = ({selectedCategoryName, handleButtonClick}) => {
    
    return (
        <div className='flex gap-2'>
            <ButtonPrimary 
            onClick={() => handleButtonClick('All')} 
            theme={`btn-info ${selectedCategoryName === 'All' && 'btn-active'}`} 
            >All</ButtonPrimary>
            
            <ButtonPrimary 
            onClick={() => handleButtonClick('Interview')} 
            theme={`btn-info ${selectedCategoryName === 'Interview' && 'btn-active'}`} 
            >Interview</ButtonPrimary>
            
            <ButtonPrimary 
            onClick={() => handleButtonClick('Rejected')} 
            theme={`btn-info ${selectedCategoryName === 'Rejected' && 'btn-active'}`} 
            >Rejected</ButtonPrimary>
        </div>
    );
};

export default CategoryButtons;