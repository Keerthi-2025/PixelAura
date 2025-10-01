// import React from 'react'

// function Footer() {
//   return (
//     <div className='pt-16 pb-16 bg-black'>
//         <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8
//         border-b-2 border-gray-900 space-y-6 sm:scroll-py-0'>
//             <div className='col-span-2'>
//                 <p className='text-2xl sm:text-3xl md:text-4xl text-white font-bold w-[80%]'>
//                 We develop and create digital future
//                 </p>
//             </div>


//             <div className='flex flex-row space-x-100'>
//             <div>
//                 <h1 className='text-xl text-white mt-6'> Address</h1>
//                     <p className='text-white mt-4'>Mangalore </p>
//                         <p className='text-white'>India</p>
                
//             </div>

//             <div>
//                 <h1 className='text-white font-bold text-xl'>Contact</h1>
//                 <p className='text-white mt-4 opacity-60'>Email</p>
//                 <p className='text-white mt-4 opacity-60'>Info@gmail.com</p>

//                  <h1 className='text-white font-bold text-xl'>Phone</h1>
//                 <p className='text-white mt-4 opacity-60'>+91 XXXXXXXXX cl</p>
                


//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer



import React from 'react'

function Footer() {
  return (
    <div className="pt-16 pb-16 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 border-b-2 border-gray-900">
        
        {/* Left Section - Heading */}
        <div className="col-span-2">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white font-bold w-[80%]">
            We develop and create digital future
          </p>
        </div>

        {/* Address Section */}
        <div>
          <h1 className="text-xl text-white mt-6">Address</h1>
          <p className="text-white mt-4">Mangalore</p>
          <p className="text-white">India</p>
        </div>

        {/* Contact Section */}
        <div>
          <h1 className="text-xl text-white font-bold mt-6">Contact</h1>
          <p className="text-white mt-4 opacity-60">Email</p>
          <p className="text-white mt-2 opacity-60">Info@gmail.com</p>

          <h1 className="text-xl text-white font-bold mt-6">Phone</h1>
          <p className="text-white mt-4 opacity-60">+91 XXXXXXXXX</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

