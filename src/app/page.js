import LeftBar from '@/Components/LeftBar';
import Navbar from '@/Components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex'>
      <LeftBar></LeftBar>
      <Navbar></Navbar>
    </div>
  );
};

export default HomePage;