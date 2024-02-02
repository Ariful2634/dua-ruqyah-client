import LeftBar from '@/Components/LeftBar';
import Navbar from '@/Components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex bg-gray-200 '>
      <LeftBar></LeftBar>
      <Navbar></Navbar>
    </div>
  );
};

export default HomePage;