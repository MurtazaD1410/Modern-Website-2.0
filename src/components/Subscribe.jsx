import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-black py-16 w-screen '>
            <div className='flex flex-col text-center'>
                <h1 className='text-3xl md:text-4xl '>Join Our DeFi Community</h1>
                <div className='my-4'>
                    <input type='email' placeholder='Enter your Email' className='py-3 mr-3 px-3 w-3/5 max-w-[400px] rounded-full ' />
                    <button className='bg-gradient-to-r from-[#6a00ff] to-[#00d8ff]'>Sign Up</button>
                </div>
                <div className='flex justify-center text-xs sm:text-base'>
                    <input type='checkbox' className='w-4 ml-2 ' name='' id='' />
                    <p className='ml-2'> Yes, I agree to receive email communications from DeFi</p>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
