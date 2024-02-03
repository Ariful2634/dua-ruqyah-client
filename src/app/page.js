import Categories from '@/Components/Categories';
import LeftBar from '@/Components/LeftBar';
import Navbar from '@/Components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex gap-5 h-[100vh] overflow-hidden bg-gray-200 '>
      <LeftBar></LeftBar>
      <div>
        <Navbar></Navbar>
        <div>
          <Categories></Categories>
        </div>
      </div>
    </div>
  );
};

export default HomePage;