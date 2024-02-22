import React from 'react';

const HomeBanner = () => {
    return (
        <div className=''>
            <div className="hero lg:h-[650px] md:h-[850px]  " style={{ backgroundImage: 'url(https://i.ibb.co/CPSpHDF/homepage-bg.jpg)' }}>
                <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-24 px-12 py-10 '>
                    <div className='lg:space-y-7 space-y-3 md:pt-10 '>
                        <h1 className='lg:text-5xl text-4xl font-bold'>Welcome to Thailand Elite Visa</h1>
                        <p className='lg:text-2xl text-base font-semibold'>Unlock a world of extraordinary opportunities and seamless immigration services.</p>
                        <div className=' space-x-5'>
                            <button className='btn btn-primary uppercase'>learn more</button>
                            <button className='btn btn-outline btn-primary uppercase'>contact us</button>
                        </div>
                    </div>
                    <div className=''>
                        <img  className='md:h-2/6 md:mb-10' src="https://i.ibb.co/tHS0X4c/thailand-elite-fasttrack.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;