import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext'

const SongItem = ({name,image,desc,id}) => {
    const {playWithId} = useContext(PlayerContext)
  return (
    <div className='min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]' onClick={()=>playWithId(id)}>
    <img src={image} className='rounded' alt="" />
    <p className='font-bold mt-2 mb-1'>{name}</p>
    <p className='text-slate-200 text-sm'> {desc}</p>
    </div>
  )
}

export default SongItem
