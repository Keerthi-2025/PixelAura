"use client"

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 
  }
};



function ReviewSlider() {
  return (   
    <Carousel
      arrows={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
    >
      <div>
        <ReviewCard image="r1.jpg" name="Jhon" role="Engineer" />
      </div>

      <div>
        <ReviewCard image="r1.jpg" name="Bon" role="Devops Engineer" />
      </div>

      <div>
        <ReviewCard image="r1.jpg" name="Con" role="Mech Engineer" />
      </div>
    </Carousel>
  )
}

export default ReviewSlider;
