"use client"
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";

const Categories = () => {


    const [subCat, setSubCat] = useState([])
    const [duas, setDuas]=useState([])
    const [arabic, setArabic]=useState([])

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
                <div className="drawer-content flex flex-col w-[500px] lg:w-[800px]   overflow-y-auto   ">
                    {/* Page content here */}
                    <div  className="lg:ml-10 ml-1 mt-8 rounded-xl h-[600px] overflow-auto">
                    <div>
                        <h2 >
                            {
                                arabic.map(arab=>(<div    key={arab.id}>
                                    <div className='bg-white p-2 mb-2'>
                                    <p>{arab.dua_name_en}</p>
                                    <p >{arab.dua_arabic}</p>
                                    </div>
                                </div>))
                            }
                        </h2>
                        
                    </div>
                    </div>
                    <label
                        htmlFor="my-drawer-2"
                        className=" absolute top-0  justify-start flex w-20 mx-auto lg:mt-6 drawer-button lg:hidden"
                    >
                        <AiOutlineMenu className="text-2xl ml-1 "></AiOutlineMenu>
                    </label>
                </div>
                <div className="drawer-side lg:bg-white rounded-tl-xl h-[600px] overflow-hidden rounded-tr-2xl">
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
                    <div className="w-[320px] h-[500px] p-3 mb-3 justify-between   my-2 flex flex-col overflow-auto">

                        <div>
                            {
                                category.map((cat) => (
                                    <div key={cat.id} className="collapse " >
                                        <input  type="radio" name="my-accordion-2" className='w-52  mb-2 ' checked="checked" />
                                        <div onClick={() => handleCategoryClick(cat.cat_id)}  className="collapse-title text-xl mb-2 font-medium text-center bg-gray-200">
                                            {cat.cat_name_en}
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