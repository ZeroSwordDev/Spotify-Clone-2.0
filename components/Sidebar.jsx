
import React, { useContext } from "react";
import Image from "next/image";
import image from "../src/app/img/logoSpotify.png";
import { AiFillHome , AiFillHeart} from "react-icons/ai";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BiLibrary, BiSearchAlt } from "react-icons/bi";
import { AuthContext } from "../context/AuthContext";
import PlayListCard from "./PlayListCard";
import { signOut } from "next-auth/react";
import { useSelector } from "react-redux";


function Sidebar() {

  const {playlistUserRecent} = useContext(AuthContext);


  return (
    <div className=' flex flex-col justify-between items-center  w-[210px] h-screen p-3 bg-black'>
      {/* Menu And Logo */}
      <div className=' flex flex-col gap-2 items-center  p-3 '>
        <Image
          src={image}
          alt=''
        />
        <hr />
        <div className=' w-44 h-9 flex hover:bg-[#282828] transition duration-300 rounded'>
          <button className='flex  items-center space-x-2 p-2 '>
            <AiFillHome
              size={20}
              className=' text-gray-200 '
            />
            <p className=' text-gray-200 text-sm '>Home</p>
          </button>
        </div>

        <div className=' w-44 h-9 flex   hover:bg-[#282828] transition duration-300 rounded  text-white'>
          <button className='flex items-center  space-x-2 p-2'>
            <BiSearchAlt
              size={20}
              className=' text-gray-500 '
            />
            <p className=' text-gray-500 text-sm '>Search</p>
          </button>
        </div>

        <div className=' w-44 h-9 flex  hover:bg-[#282828] transition duration-300 rounded'>
          <button className='flex items-center  space-x-2 p-2'>
            <BiLibrary
              size={20}
              className=' text-gray-500 '
            />
            <p className=' text-gray-500 text-sm '>Your Library</p>
          </button>
        </div>
        <hr />

        {/* PlayList */}
        <div className=" flex flex-col w-40 h-[400px] p-2 space-y-5 ">
          <p className="text-gray-400 text-xs font-mono mb-4">PLAYLIST</p>

         {/*  <div className="flex items-center p-2 space-x-2 h-10 w-36 text-gray-500 cursor-pointer">
                <BsFillPlusSquareFill size={30}/>
                <p className="text-sm">Create list</p>
          </div> */}
  {
    playlistUserRecent?.map(item => (
      <PlayListCard key={item.id} Playlist ={item}/>
    ))
  }
          
          <div className="flex items-center p-2 space-x-2 h-10 w-36 text-gray-500 cursor-pointer">
               <button onClick={()=> signOut({callbackUrl: '/login'})}>Logout</button>
          </div>
        </div>
      </div>
      {/* PLay  */}
      <div className='flex w-32 h-[30px]'></div>
    </div>
  )
}

export default Sidebar
