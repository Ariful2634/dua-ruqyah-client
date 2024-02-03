import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Category = ({ cat }) => {
    return (
        // <div>
        // <details key={cat.id} className="dropdown flex flex-col">
        //     <summary className="m-1 btn">{cat.cat_name_en}</summary>
        //     <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        //       <li><a>Item 1</a></li>
        //       <li><a>Item 2</a></li>
        //     </ul>
        //   </details>
        // </div>

        <div className=" h-screen bg-base-300">
            <div className="drawer lg:drawer-open  mx-auto bg-white  rounded-2xl min-h-[calc(100vh-32px)]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col   ">
                    {/* Page content here */}
                    <div className="lg:ml-10 ">
                        {/* <Outlet></Outlet> */}
                    </div>
                    <label
                        htmlFor="my-drawer-2"
                        className=" absolute top-0  justify-start flex w-20 mx-auto lg:mt-6 drawer-button lg:hidden"
                    >
                        <AiOutlineMenu className="text-2xl m-4 "></AiOutlineMenu>
                    </label>
                </div>
                <div className="drawer-side ">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>

                    <div className="w-52 h-screen bg-white justify-between  flex flex-col ">
                        <div>
                            <details key={cat.id} className="dropdown flex flex-col">
                                <summary className="m-1 btn">{cat.cat_name_en}</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Category;