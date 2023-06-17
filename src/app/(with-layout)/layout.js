import Navbar from '@/components/Navbar';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div className=''>
           <div className='lg:px-40'>
           <Navbar></Navbar>
           </div>
            <hr className='border-gray-300 ' />
            {children}
        </div>
    );
};

export default WithLayout;