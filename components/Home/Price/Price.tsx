import { Check } from 'lucide-react'
import React from 'react'
import PriceCard from './PriceCard'


function Price() {
    return (
        <div className='pt-16 pb-16 bg-gray-200'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 '>
                <div className='space-y-6'>
                    <h1 className='uppercase mb-6 font-bold'>Flexible and Affordable</h1>
                    <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>Our Pricing Plans</h1>
                    <p className='font-medium'>
                        Higher resolution or more complex images cost more. <br />
                        What “high quality” means can vary across providers.<br />
                        Some services use a credit or token system, where you pay <br />
                        for tokens or credits and each generation uses some amount. <br />
                        Others are flat subscription with limits.
                    </p>

                    <div className='space-y-2'>
                        <div className='flex items-center space-x-2'>
                            <Check className='text-green-500 w-6 h-6' />
                            <p className='text-lg font-semibold'>Quality vs. Resolution</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Check className='text-green-500 w-6 h-6' />
                            <p className='text-lg font-semibold'>Credits or tokens</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Check className='text-green-500 w-6 h-6' />
                            <p className='text-lg font-semibold'>Billing frequency</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Check className='text-green-500 w-6 h-6' />
                            <p className='text-lg font-semibold'>Fast GPU time</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <Check className='text-green-500 w-6 h-6' />
                            <p className='text-lg font-semibold'>Special Features</p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <PriceCard price="4" user="1" type="Silver" />
                    <PriceCard price="5" user="2" type="Golden" />
                </div>


                {/* 
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                    
                    <div>
                        <PriceCard  price = "4"  user="1" type= "Silver"/>
                    </div>


                    <div>
                        <PriceCard  price = "5"  user="2" type= "Golden"/>
                    </div>

                </div> */}



            </div>
        </div>
    )
}

export default Price