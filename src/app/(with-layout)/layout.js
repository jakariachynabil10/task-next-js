import Navbar from '@/components/Navbar';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div className='lg:px-40'>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default WithLayout;