import Image from 'next/image';
import React from 'react';


const Stories = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
      <div className='flex gap-8 w-max'>
        {/* Story */}
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Ricky</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Frank</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Sorah</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/234272/pexels-photo-234272.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Billy</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Vultron</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Ash</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Misty</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Bo</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/27363340/pexels-photo-27363340/free-photo-of-burano.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Brock</span>
        </div>
        <div className='flex flex-col items-center gap-2 cursor-pointer'>
            <Image src='https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" width={80} height={80} className='w-20 h-20 rounded-full ring-2 object-cover'/>
            <span className='font-medium'>Joey</span>
        </div>
      </div>
    </div>
  )
}

export default Stories
