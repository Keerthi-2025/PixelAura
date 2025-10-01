"use client";
import Image from 'next/image';
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};

function Slider() {
  return (
    <Carousel
  arrows={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
>


    {["r1.jpg", "r2.jpg", "r3.jpg" , "r4.jpg", "r5.jpg"]. map(
        (image, index) =>(
            <div key={index} className='p-4'>
                <div className='h-[200px] relativ w-full items-center '>  

                <div className="p-4">
                        <Image
                            //src={`/${image}`}
                            src={`/${image}`}
                            alt='images'
                            width={400}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        )
    )}

    </Carousel>
  )
}

export default Slider;