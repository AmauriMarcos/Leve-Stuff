import React from 'react';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import Stories from '../components/Stories';
import AddPost from '../components/AddPost';
import Feed from '../components/Feed';


const HomePage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className='hidden xl:block w-[20%]'><LeftMenu/></div>
      <div className='w-full lg:w-[70%] xl:w-[60%]'>
        <div className=''>
          <Stories/>
          <AddPost/>
          <Feed/>
        </div>
      </div>
      <div className='hidden lg:block w-[30%] xl:w-[30%]'><RightMenu/></div>
    </div>
  )
}

export default HomePage
