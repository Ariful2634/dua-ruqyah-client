"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import allah from "../assets/allah 1 (Traced).png"
import { FiCopy } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";
import { BsShare } from "react-icons/bs";
import { MdOutlineReport } from "react-icons/md";

const Categories = () => {


    const [subCat, setSubCat] = useState([])
    const [duas, setDuas] = useState([])
    const [arabic, setArabic] = useState([])

    const [category, setCategory] = useState([])

    // for category
    useEffect(() => {
        fetch('http://localhost:3001/getCategory')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    const [subCategory, setSubCategory] = useState([])

    // for sub category
    useEffect(() => {
        fetch('http://localhost:3001/getSubCategory')
            .then(res => res.json())
            .then(data => setSubCategory(data))

    }, [])

    // for dua
    useEffect(() => {
        fetch('http://localhost:3001/getDua')
            .then(res => res.json())
            .then(data => setDuas(data))

    }, [])


    // map to get the data
    useEffect(() => {
        const mappedData = subCategory.map(cats => {
            const filteredSubCategory = subCategory.filter(sub => sub.cat_id === cats.cat_id);
            return { ...cats, subCategory: filteredSubCategory };
        });

        setSubCat(mappedData);
    }, [category, subCategory]);



    const handleCategoryClick = (cat_id) => {
        // setSelectedCategory(cat_id);
        // console.log(cat_id)

        // Assuming 'duas' is an array of objects with a 'cat_id' property
        const filteredDuas = duas.filter((dua) => dua.cat_id === cat_id);
        setArabic(filteredDuas);
    };


    // console.log(arabic);


    return (
        <div className=" h-screen ">
            <div className="drawer lg:drawer-open  mx-auto   rounded-2xl  overflow-hidden">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col w-[425px] lg:w-[800px] mx-auto  overflow-y-auto   ">
                    {/* Page content here */}
                    <div className="lg:ml-10  mt-8  h-[600px] overflow-auto">
                        <div >
                            {
                                arabic.map((arab, index) => (<div key={arab.id}>
                                    <div className='bg-white p-5 mb-4 rounded-xl'>
                                        <div className='space-y-4'>
                                            <div className='flex items-center gap-3'>
                                                <Image src={allah} width={40} height={40} alt='Allah'></Image>
                                                <p className='mb-2 text-[#1FA45B] font-bold'>{index + 1}. {arab.dua_name_en}</p>
                                            </div>
                                            <p className='mb-2 font-medium'>{arab.top_en}</p>
                                            <p className='mb-2 font-medium text-xl lg:text-3xl'>{arab.dua_arabic}</p>
                                            {
                                                arab.transliteration_en !== null && <p className='italic mb-2 font-medium'>Transliteration: {arab.transliteration_en}</p>
                                            }
                                            {
                                                arab.translation_en !== null && <p className='text-gray-700 mb-2 font-medium'>Translation: {arab.translation_en}</p>
                                            }
                                            <p className='mb-2'>{arab.bottom_en}</p>
                                            <div>
                                                <p className='text-[#1FA45B] font-bold'>Reference:</p>
                                                <p>{arab.refference_en}</p>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <div>
                                                    {
                                                        arab.audio !== null && <audio className='lg:w-[300px] w-[100px]' controls>
                                                            <source src={arab.audio} type="audio/mp3" />
                                                        </audio>
                                                    }
                                                </div>
                                                <div className='flex gap-7 items-center'>
                                                    <FiCopy className='text-xl'></FiCopy>
                                                    <BsBookmark className='text-xl'></BsBookmark>
                                                    <IoBulbOutline className='text-xl'></IoBulbOutline>
                                                    <BsShare className='text-xl'></BsShare>
                                                   <MdOutlineReport className='text-3xl'></MdOutlineReport>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>))
                            }

                        </div>
                    </div>
                    <label
                        htmlFor="my-drawer-2"
                        className=" absolute top-0  justify-start flex w-20 mx-auto lg:mt-6 drawer-button lg:hidden"
                    >
                        <AiOutlineMenu className="text-2xl ml-1 "></AiOutlineMenu>
                    </label>
                </div>
                <div className="drawer-side lg:bg-white lg:rounded-tl-xl lg:h-[600px] overflow-hidden lg:rounded-tr-2xl">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>

                    <div className='bg-green-600 text-white w-full  text-center z-10  py-4 mb-3 '>
                        <h2>Categories</h2>
                    </div>
                    <div className='text-center hidden lg:block'>
                        <input type="text" placeholder="Search by Categories" className="input pl-12 bg-white input-bordered w-[280px] relative" />
                        <div className='w-[35px] text-center rounded absolute p-2 top-2 cursor-pointer right-[260px] '>
                            <IoSearchOutline className='text-xl'></IoSearchOutline>
                        </div>
                    </div>
                    <div className="w-[320px] h-[500px] p-3 mb-3 justify-between mt-12 lg:mt-0  my-2 flex flex-col overflow-auto">

                        <div>
                            {
                                category.map((cat) => (
                                    <div key={cat.id} className="collapse " >
                                        <input type="radio" name="my-accordion-2" className='w-52  mb-2 ' checked="checked" />
                                        <div onClick={() => handleCategoryClick(cat.cat_id)} className="collapse-title text-xl mb-2 font-medium text-center bg-gray-200">
                                            {/* <Image src={`http://localhost:3001/getCategory/${cat.cat_icon}`} alt='icon' width={50} height={50}></Image> */}

                                            <h2>{cat.cat_name_en}</h2>
                                        </div>
                                        <div className="collapse-content text-black">
                                            <h2>
                                                {
                                                    subCat.map(sub => (<ul key={sub.id} className="timeline timeline-vertical ">
                                                        <li className='flex items-center space-y-3'>

                                                            <div className="timeline-start">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                            </div>
                                                            <div className=" timeline-box bg-white "><h2>{sub.subcat_name_en}</h2></div>
                                                        </li>
                                                    </ul>))
                                                }
                                            </h2>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Categories;