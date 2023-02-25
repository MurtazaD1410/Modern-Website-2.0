import React from 'react';
import terminal from '../assets/terminal.png';

const Developers = () => {
    return (
        <div className='bg-black w-screen '>
            <div className='max-w-[1240px] px-4 py-16 mx-auto sm:flex sm:space-x-7'>
                <div className=' '>
                    <h1 className='text-3xl md:text-4xl'>Superpowers for DEFI developers</h1>
                    <p className='text-xl md:text-2xl'>
                        Checkout the <span className='text-[#00d8ff]'>documentation</span>, the <span className='text-[#00d8ff]'>quick start</span> or a guide below integrate your project with thousands of tokens and billions of liquidity
                    </p>
                </div>
                <div className=''>
                    <img src={terminal} className='shadow-xl max-w-[250px] my-14  sm:my-0 mx-auto shadow-[#00d8ff]' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Developers;
