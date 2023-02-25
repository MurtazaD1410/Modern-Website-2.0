import React from 'react';
import HeroVid from '../assets/video.mp4';

const Hero = () => {
    return (
        <div className='w-screen h-[90vh] top-[90px]'>
            <video src={HeroVid} autoPlay muted loop className='object-cover w-full h-full -z-10 absolute'></video>
            <div className='text-white flex flex-col w-full h-4/5 text-center items-center justify-center'>
                <h1 className='my-2 md:text-5xl'>Decentralized</h1>
                <h1 className='md:text-5xl'>
                    <span className='text-[#00d8ff]'> Trading</span> Protocol
                </h1>
                <p className='text-xl md:text-2xl my-3 mx-5'>Garaunteed liquidity trading for millions of users and top Ethereum applications</p>
                <div className=''>
                    <button className='m-3 bg-gradient-to-r from-[#6a00ff] to-[#00d8ff]'>Use Defi</button>
                    <button className=' m-3 border-2 border-[#00d8ff] bg-transparent text-[#00d8ff]'>FAQ</button>
                </div>
            </div>
            <div className=''>
                <p className='text-white font-bold text-2xl md:text-3xl text-center'>Total Volume Secured: $42,104,783,662.35</p>
            </div>
        </div>
    );
};

export default Hero;
