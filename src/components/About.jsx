import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

const About = () => {
    return (
        <div className='w-screen bg-black text-center'>
            <div className='max-w-[1240px] mx-auto px-4 py-16'>
                <h1 className='py-4 text-3xl md:text-4xl'>A Growing Protocol Ecosystem</h1>
                <p className='py-4 text-xl md:text-2xl mb-5'>The Defi protocol system empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open to all and accessible by all.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                    <div className=' p-7 border-2 border-white my-2 text-left rounded-xl'>
                        <div className='bg-[#00d8ff] rounded-full  my-4  w-fit p-4'>
                            <SiHiveBlockchain size={40} className='fill-gray-700 ' />
                        </div>
                        <h3 className='text-xl font-bold my-3 '>Relaible, tamper-proof network</h3>
                        <p className='text-zinc-300 '>Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract</p>
                    </div>
                    <div className=' p-7 border-2 border-white my-2 text-left rounded-xl'>
                        <div className='bg-[#00d8ff] rounded-full  my-4  w-fit p-4'>
                            <SiStrapi size={40} className='fill-gray-700 ' />
                        </div>
                        <h3 className='text-xl font-bold my-3'>Seamless connection to any API</h3>
                        <p className='text-zinc-300 '>Build on a flexible framwork that can retreve data from any API, connect with existing systems, and integrate with any current or future blockchain.</p>
                    </div>
                    <div className=' p-7 border-2 border-white my-2 text-left rounded-xl'>
                        <div className='bg-[#00d8ff] rounded-full  my-4  w-fit p-4'>
                            <SiFsecure size={40} className='fill-gray-700 ' />
                        </div>
                        <h3 className='text-xl font-bold my-3'>Proven, ready-made solutions</h3>
                        <p className='text-zinc-300 '>Integrate pre-build, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications</p>
                    </div>
                    <div className=' p-7 border-2 border-white my-2 text-left rounded-xl'>
                        <div className='bg-[#00d8ff] rounded-full  my-4  w-fit p-4'>
                            <VscServerProcess size={40} className='fill-gray-700 ' />
                        </div>
                        <h3 className='text-xl font-bold my-3'>Secure off-chain computation</h3>
                        <p className='text-zinc-300 '>Use a deccentralized network of DeFi Keeper nodes to automate contracts, migrating risk of manual interventions and centralized servers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
