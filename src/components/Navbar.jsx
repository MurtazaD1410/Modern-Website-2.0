import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='w-screen bg-black h-[90px]'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div>
                    <h1 className='text-[#00d8ff]'>DEFI</h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex text-white  items-center'>
                        <li>Platform</li>
                        <li>Developers</li>
                        <li>Community</li>
                        <li>About</li>
                        <button className='bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] ml-2'>Use Defi</button>
                    </ul>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} className='text-white ' /> : <AiOutlineMenu size={30} className='text-white ' />}
                </div>
                <div className={nav ? 'w-screen flex justify-center text-center absolute top-[90px] left-0  bg-black text-white' : 'hidden'}>
                    <ul className=''>
                        <li className='text-2xl'>Platform</li>
                        <li className='text-2xl'>Developers</li>
                        <li className='text-2xl'>Community</li>
                        <li className='text-2xl'>About</li>
                        <button className='bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] m-6'>Use Defi</button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
