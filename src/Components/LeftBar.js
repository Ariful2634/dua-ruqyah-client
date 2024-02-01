"use client"
import Image from 'next/image';
import React from 'react';
import dua from "../assets/logo.png"
import alldua from "../assets/All Duas.svg"
import group1 from "../assets/Group 1.svg"
import memo from "../assets//Memorize.svg"
import bookmark from "../assets/Bookmark.svg"
import ruq from "../assets/Ruqyah.svg"
import info from "../assets/Dua Q&A.svg"
import book from "../assets/Book.svg"
import want from "../assets/I want to support.png"



const LeftBar = () => {
    return (
        <div className='w-[100px] bg-white rounded-t-3xl rounded-b-3xl overflow-auto h-[100vh]'>
            <div>
                <div className='flex justify-center '>
                    <Image src={dua} width={90} height={90} className='mt-3' alt='duaPic'></Image>
                </div>
                <div className='flex flex-col mt-16'>

                    <div className='flex justify-center mb-5'>
                        <Image src={group1} width={40} height={40} alt='group'></Image>
                    </div>
                    <div className='flex justify-center mb-5'>
                        <Image src={alldua} width={40} height={40} alt='alldua'></Image>
                    </div>
                    <div className='flex justify-center mb-5'>
                        <Image src={memo} width={40} height={40} alt='memo'></Image>
                    </div>
                    <div className='flex justify-center mb-5'>
                        <Image src={bookmark} width={40} height={40} alt='bookmark'></Image>
                    </div>
                    <div className='flex justify-center mb-5'>
                        <Image src={ruq} width={40} height={40} alt='ruq'></Image>
                    </div>
                    <div className='flex justify-center mb-5'>
                        <Image src={info} width={40} height={40} alt='info'></Image>
                    </div>
                    <div className='flex justify-center mb-10'>
                        <Image src={book} width={40} height={40} alt='book'></Image>
                    </div>
                </div>
                <div className='flex justify-center mt-6'>
                    <Image src={want} width={90} height={90} alt='duaPic'></Image>
                </div>
            </div>

        </div>
    );
};

export default LeftBar;