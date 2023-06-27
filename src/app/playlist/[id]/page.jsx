"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import button from "../../img/button.png";
import heart from "../../img/heart.png";
import dots from "../../img/dots.png";
import SongCard from "../../../../components/SongCard";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { detailPLaylist } from "../../../../redux/PlayListDetailsSlice";
const page = () => {
  const { data: session } = useSession();
  const navigation = useParams();
  const dispatch = useDispatch();
  const tracksList = useSelector(
    (state) => state.playlistDetails.playlistDetails
  );
  const playlist = useSelector((state) => state.playlistDetails.playlist);

  const loading = useSelector((state) => state.playlistDetails.loading);

const image = playlist?.images?.map(item => item?.url)[0]
  useEffect(() => {
    dispatch(detailPLaylist(navigation.id, session.accessToken));
  }, [navigation.id]);

  return (
    <div className="w-full h-screen text-[#FFFFFF] bg-headerPlaylist-gradient box-border p-5 ">
      {loading ? (
        <div className="flex items-center  justify-center h-screen w-full  pr-40 pb-10">
          <span class="loader"></span>
        </div>
      ) : (
        <>
          <header className="h-[34%] space-x-5 flex items-end">
            <img src={image} alt="img" width={200} height={200}  className="" />
            <div className="flex flex-col gap-3">
              <h6>Playlist</h6>
              <h1 className="text-7xl font-bold">{playlist.name}</h1>
              <p className="text-sm opacity-70">
              {playlist.description}
              </p>
              <p>
                <span className="text-bold">{playlist?.owner?.display_name}</span> -{" "}
                <span className="opacity-70">{playlist?.tracks?.total} songs</span>
              </p>
            </div>
          </header>
          <nav className="h-auto p-8 gap-x-4 box-border flex justify-start items-center">
            <Image
              src={button}
              alt="button"
              className="w-[55px] h-[55px] cursor-pointer"
            />
            <div className="flex p-3">
              <Image
                src={heart}
                alt="heart"
                className="w-[46px] h-[46px] cursor-pointer hover:bg-[#282828] transition duration-300 rounded"
              />
              <Image
                src={dots}
                alt="dots"
                className="w-[46px] h-[46px] cursor-pointer hover:bg-[#282828] transition duration-300 rounded"
              />
            </div>
          </nav>

          <main className="overflow-y-scroll h-[380px] w-full mb-[80px]">
            <div className="flex w-full  flex-col gap-5">
              <div className="w-full  h-5 box-border px-10 py-2 flex justify-between">
                <span className="w-64">TITLE</span>
                <span className="w-64">ALBUM</span>
                <span className="w-64">DATE ADDED</span>
                <span className="w-10">tiempo</span>
              </div>
              {tracksList &&
                Object.values(tracksList)?.map((item) => (
                  <SongCard key={item.track.id} TrakcPlayList={item} />
                ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default page;
