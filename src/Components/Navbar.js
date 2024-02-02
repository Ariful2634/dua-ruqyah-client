"use client"
import React, { useEffect, useState } from 'react';
import img from '../assets/profile 1.png'
import Image from 'next/image';
import { IoSearchOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const toggleDrawer = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const closeDrawerOnOutsideClick = (event) => {
          if (open && !event.target.closest('.drawer')) {
            setOpen(false);
          }
        };
    
        document.addEventListener('click', closeDrawerOnOutsideClick);
    
        return () => {
          document.removeEventListener('click', closeDrawerOnOutsideClick);
        };
      }, [open]);

    // console.log(open)
    return (
        <div className='w-[92%]'>
            <div className="navbar ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Dua Page</a>
                </div>
                <div className="flex-none gap-40">
                    <div className="form-control hidden lg:block">
                        <input type="text" placeholder="Search by Dua Name" className="input input-bordered w-24 md:w-auto relative" />
                        <div className='w-[35px] text-center rounded absolute p-2 top-4 right-[250px] bg-gray-300'>
                            <IoSearchOutline></IoSearchOutline>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end flex items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hidden lg:block">
                            <div className="w-10 rounded-full">
                                <Image src={img} alt='img'></Image>
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                        {/* for drawer */}
                        <div className={`flex ${open ? 'overflow-x-hidden' : ''}`}>
                        {open && <div className="fixed inset-0 bg-black opacity-50"></div>}
                                <div onClick={toggleDrawer}>
                                    <IoMdSettings className='text-green-600 text-xl'></IoMdSettings>
                                </div>
                            {/* Drawer */}
                            {open && (
                                <div className="fixed top-0 right-0 h-full w-[300px] bg-white text-black rounded-tl-2xl rounded-bl-2xl p-8">
                                    <h2>Drawer Content</h2>
                                    
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;