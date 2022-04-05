import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-gray-600 to-black'>
            <div className='text-center text-white'>
                <h1 className='text-center text-9xl font-bold text-rose-300'>4<span className='text-white'>0</span>4</h1>
                <h3 className='py-3 text-4xl font-bold opacity-25'>We Can't Find That Page</h3>
                <p className=' w-96 py-2 text-sky-200'>we're fairly sure that page used to be here. but seems to have gone missing we do apologise on it's behalf</p>
            </div>
        </div>
    );
};

export default NotFound;