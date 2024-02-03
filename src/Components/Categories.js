"use client"
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";

const Categories = () => {


    const [dua, setDua] = useState({})

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/getCategory')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    const [subCategory, setSubCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/getSubCategory')
            .then(res => res.json())
            .then(data => setSubCategory(data))

    }, [])


    useEffect(() => {
        const mappedData = subCategory.map(cats => {
            const filteredSubCategory = subCategory.filter(sub => sub.cat_id === cats.cat_id);
            return { ...cats, subCategory: filteredSubCategory };
        });

        setDua(mappedData);
    }, [category, subCategory]);


    //   console.log(category);
    //   console.log(subCategory);
    console.log(dua);




    return (


        <div className=" h-screen ">
            <div className="drawer lg:drawer-open  mx-auto   rounded-2xl  overflow-hidden">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col   ">
                    {/* Page content here */}
                    <div className="lg:ml-10 ml-1 mt-8">
                        {/* <Outlet></Outlet> */}
                        <h2>
                            {
                                dua.dua_name_bn
                            }
                        </h2>
                        <h2>hello</h2>
                    </div>
                    <label
                        htmlFor="my-drawer-2"
                        className=" absolute top-0  justify-start flex w-20 mx-auto lg:mt-6 drawer-button lg:hidden"
                    >
                        <AiOutlineMenu className="text-2xl ml-1 "></AiOutlineMenu>
                    </label>
                </div>
                <div className="drawer-side bg-white rounded-tl-xl h-[600px] overflow-hidden rounded-tr-2xl">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>

                    <div className='bg-green-600 text-white text-center py-4 mb-3 '>
                        <h2>Categories</h2>
                    </div>
                    <div className='text-center'>
                        <input type="text" placeholder="Search by Categories" className="input pl-12 bg-white input-bordered w-[280px] relative" />
                        <div className='w-[35px] text-center rounded absolute p-2 top-2 cursor-pointer right-[260px] '>
                            <IoSearchOutline className='text-xl'></IoSearchOutline>
                        </div>
                    </div>
                    <div className="w-[320px] h-[500px] p-3 mb-3 justify-between bg-white  my-2 flex flex-col overflow-auto">

                        <div>
                            {
                                category.map((cat) => (
                                    <div key={cat.id} className="collapse  ">
                                        <input type="radio" name="my-accordion-2" className='w-52  mb-2 ' checked="checked" />
                                        <div className="collapse-title text-xl mb-2 font-medium text-center bg-gray-200">
                                            {cat.cat_name_en}
                                        </div>
                                        <div className="collapse-content text-black">
                                            <h2>
                                                {
                                                    dua.map(sub => (<ul key={sub.id} className="timeline timeline-vertical ">
                                                        <li className='flex items-center space-y-3'>

                                                            <div className="timeline-start">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                                            </div>
                                                            <div className=" timeline-box bg-white ">{sub.subcat_name_en}</div>
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