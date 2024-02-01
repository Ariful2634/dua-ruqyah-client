"use client"
import React from 'react';
import img from '../assets/profile 1.png'
import Image from 'next/image';
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='w-[92%]'>
            <div className="navbar ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Dua Page</a>
                </div>
                <div className="flex-none gap-40">
                    <div className="form-control hidden lg:block">
                        <input type="text" placeholder="Search by Dua Name" className="input input-bordered w-24 md:w-auto relative" />
                        <div className='w-[35px] text-center rounded absolute p-2 top-4 right-[230px] bg-gray-300'>
                        <IoSearchOutline></IoSearchOutline>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;