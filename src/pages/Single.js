import React from 'react'
import { FaUserEdit, FaComment, FaRegThumbsUp, FaFacebookF, FaGit, FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Single = () => {
    return (
        <>
            <div className="container w-3/4 mx-auto items-center ">
                <div className="singleBlog p-2 border rounded-md hover:shadow-md">
                    <p className='font-bold text-2xl md:text-4xl md:my-4 hover:text-blue-500'><NavLink to="/">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </NavLink></p>
                    <div className="">
                        <img className='w-full' src="https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=612x612&w=0&k=20&c=7SScR_Y4n7U3k5kBviYm3VwEmW4vmbngDUa0we429GA=" alt="" />
                        <div className="flex uppercase my-3 text-xs font-semibold justify-between items-center">
                            <div className="flex items-center">
                                <p className='flex items-center'><FaRegThumbsUp className='mx-1 text-2xl text-red-500' /> </p><span>(199)</span>
                            </div>
                            <p className='hidden md:block my-3 md:my-0 flex items-center'><FaUserEdit className='mx-1' /> Author:<span className='mx-2'>Admin</span></p>
                            <p className='hidden md:block'>10 jan 2021</p>
                            <div className="flex items-center">
                                share:
                                <FaFacebookF className='text-blue-600 text-1xl mx-2 bg-white-400 border shadow-sm' />
                                <FaGit className='text-black text-1xl mx-2 bg-white-400 border shadow-sm ' />
                                <FaGoogle className='text-yellow-600 text-1xl mx-2 bg-white-400 border shadow-sm ' />
                            </div>
                        </div>
                        <div className="my-2">
                            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum architecto sed iure eum, nemo
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, doloremque rem aliquam ab itaque alias quo quaerat provident voluptate qui soluta sit cupiditate culpa magnam temporibus! Amet quis mollitia accusamus!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                <br />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.

                                <br />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus beatae totam natus illum iusto accusantium, deleniti corporis officia id numquam delectus? Placeat vitae ducimus consequuntur minus molestiae nobis delectus enim.

                            </p>
                        </div>

                        <div className="comments my-4">
                            <p className='flex items-center text-center justify-center md:text-3xl'><FaComment className='mx-3' />Comments</p>

                            <form>
                                <input className='block my-4 border rounded-none w-2/3 p-3' type='text' name=""></input>
                                <button className='px-3 py-2 my-3 bg-gray-300 shadow-sm text-black'>COMMENT</button>
                            </form>

                            <div className="commentList flex items-center px-4">

                                <div className="comment">
                                    <div className="heading flex items-center">
                                        <img className='w-[30px] h-[30px] mr-2' src="https://cdn.iconscout.com/icon/free/png-256/free-bot-151-902126.png?f=webp" alt="" />
                                        <p className='font-semibold'>User Name</p>
                                    </div>
                                    <div className="body bg-gray-200">
                                        <p className='text-sm p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officiis quidem mollitia fugit quas itaque ea quisquam incidunt saepe, impedit iure sit ut laborum at optio alias recusandae? Suscipit, id!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single
