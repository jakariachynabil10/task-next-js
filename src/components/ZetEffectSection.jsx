import React from 'react';
import peeps1 from "../../public/image/peeps1.png"
import Image from 'next/image';
const ZetEffectSection = () => {
    return (
        <div className='custom-border'>
            <div className='border-style flex justify-center items-center mx-auto w-[700px] h-[470px] py-[70px]'>
                <div>
                    <Image src={peeps1} className='bg-transparent mix-blend-luminosity bg-origin-content' alt='people'></Image>
                </div>
                <div className='w-1/2'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores, animi dolorem magnam corrupti necessitatibus at voluptatibus illum dolores minus libero tempora nostrum laborum facere quia aut facilis vel explicabo eum cum fugit nisi. Debitis eaque hic aperiam maiores natus!</h1>
                </div>
            </div>
        </div>
    );
};

export default ZetEffectSection;