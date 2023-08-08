import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';

const Trending = () => {
    const [showRating, setShowRating] = useState(4);
    return (
        <div className='my-container py-4'>
            <h1 className='text-3xl font-semibold pb-4 text-center'>Trending Products</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-2'>
                <div className='py-6 px-2 bg-[#E4F6FE]'>
                    <div className='flex justify-center items-center w-full h-[300px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/shop/9.png" alt="" />
                    </div>
                    <div className='p-4'>
                    <Rating style={{ maxWidth: 100 }} value={showRating} onChange={setShowRating} />
                    <h2 className='text-xl font-medium'>Funskool Teddy Brown</h2>
                    <p>$190.12</p>
                    </div>
                </div>
                <div className='py-6 px-2 bg-[#E4F6FE]'>
                    <div className='flex justify-center items-center w-full h-[300px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/shop/10.png" alt="" />
                    </div>
                    <div className='p-4'>
                    <Rating style={{ maxWidth: 100 }} value={showRating} onChange={setShowRating} />
                    <h2 className='text-xl font-medium'>Funskool Teddy Brown</h2>
                    <p>$150.12</p>
                    </div>
                </div>
                <div className='py-6 px-2 bg-[#E4F6FE]'>
                    <div className='flex justify-center items-center w-full h-[300px]'>
                    <img src="https://htmldemo.net/kidol/kidol/assets/img/shop/12.png" alt="" />
                    </div>
                    <div className='p-4'>
                    <Rating style={{ maxWidth: 100 }} value={showRating} onChange={setShowRating} />
                    <h2 className='text-xl font-medium'>Funskool Teddy Brown</h2>
                    <p>$100.12</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;