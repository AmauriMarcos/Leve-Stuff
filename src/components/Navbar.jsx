import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between relative' >
      {/* Left */}
      <div className='font-bold text-xl text-blue-600 md:hidden lg:block w-[20%]'>
        <Link href='/'>SANTOSMEDIA</Link>
      </div>
      {/* Center*/}
      <div className='hidden md:flex w-[50%] text-sm'>
        {/* Links */}
        <div className='flex gap-6 items-center text-gray-600'>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/home.png" alt="Homepage" width={16} height={16}/>
              <span>Homepage</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/friends.png" alt="Homepage" width={16} height={16}/>
              <span>Friends</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image src="/stories.png" alt="Homepage" width={16} height={16}/>
              <span>Stories</span>
            </Link>
        </div>
      </div>
      {/* Right */}
      <div className='w-[30%] flex items-center justify-end gap-4 xl:gap-8'>
          <MobileMenu/>
      </div>
    </div>
  )
}

export default Navbar
