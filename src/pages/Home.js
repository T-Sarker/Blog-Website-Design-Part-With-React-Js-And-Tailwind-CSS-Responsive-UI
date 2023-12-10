import React from 'react'
import { FaCaretRight, FaUserEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Blog from './Blog';
const Home = () => {
    return (
        <>
            <div className="w-full relative p-1">
                <img className=" brightness-50 max-h-screen w-full" src="https://images.unsplash.com/photo-1482440308425-276ad0f28b19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="heroContent absolute top-[10%] md:top-[20%] ml-3 md:m-0 md:left-24 text-left">
                    <h2 className="text-white text-2xl md:my-2 md:text-5xl lg:text-7xl md:my-4 text-bolder md:text-white">Welcome To </h2>
                    <p className="text-white text-1xl my-1 md:text-3xl lg:text-5xl md:text-white md:my-3">My <span className='text-orange-500'>Blog</span></p>
                    <p className='text-white hidden md:block md:text-white max-w-[95%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nobis quo temporibus culpa sed accusamus quos</p>
                    <button className='bg-blue-400  text-white px-3 py-2 flex justify-center items-center md:bg-white md:text-black md:px-5 md:py-2 md:my-4'>Read More <i className='text-white mt-1'><FaCaretRight /></i></button>
                </div>
            </div>

            {/* blog area */}
            <Blog />
            {/* <div className="blogArea container mx-auto max-w-[80%] mb-8">
                <p className='text-center font-extrabold text-xl my-8 uppercase'>Blogs</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="singleBlog p-2 border rounded-md hover:shadow-md">
                        <div className="">
                            <img className='' src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=" alt="" />

                            <p className='font-bold text-2xl hover:text-blue-500'><NavLink to="/">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </NavLink></p>

                            <div className="my-2">
                                <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum architecto sed iure eum, nemo...</p>
                                <div className="flex uppercase my-3 text-xs font-semibold justify-between items-center">
                                    <p className='flex items-center'><FaUserEdit className='mx-1' /> Author:<span>Admin</span></p>
                                    <p>10 jan 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Home
