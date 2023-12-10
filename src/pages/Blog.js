import React from 'react'
import { FaUserEdit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Blog = () => {
    return (
        <>
            <div className="blogArea container mx-auto max-w-[80%] mb-8">
                <p className='text-center font-extrabold text-xl my-8 uppercase'>Blogs</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="singleBlog p-2 border rounded-md hover:shadow-md">
                        <div className="">
                            <img className='' src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=" alt="" />

                            <p className='font-bold text-2xl hover:text-blue-500'><NavLink to={`/blog/single`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </NavLink></p>

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
            </div>
        </>
    )
}

export default Blog
