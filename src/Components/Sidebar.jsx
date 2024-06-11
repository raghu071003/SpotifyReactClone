import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex' onClick={()=>navigate('/')}>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.home_icon} className='w-6' alt="" />
                    <p className='font-bold'>Home</p>
                </div>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src={assets.search_icon} className='w-6' alt="" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>

            <div className='bg-[#121212] h-[85%] rounded p-2'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.stack_icon} className='w-8' alt="" />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={assets.arrow_icon} className='w-5' alt="" />
                        <img src={assets.plus_icon} className='w-5' alt="" />
                    </div>
                </div>
                <div className='p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
                    <h1>Create Your First Playlist</h1>
                    <p className='font-light'>It's Easy,We will help You.</p>
                    <button className='px-4 py-1.5 bg-white text-black rounded-full text-[15px] mt-4'>Create Playlist</button>
                </div>
                <div className='p-4 bg-[#242424] rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
                    <h1>Let's Find some Podcast to follow</h1>
                    <p className='font-light'>We will keep you updated on new episodes.</p>
                    <button className='px-4 py-1.5 bg-white text-black rounded-full text-[15px] mt-4'>Browse Podcasts</button>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
