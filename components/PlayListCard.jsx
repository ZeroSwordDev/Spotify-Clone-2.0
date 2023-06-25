import Image from 'next/image'
import React from 'react'

const PlayListCard = ({ Playlist }) => {
  const image = Playlist.images[0]?.url; // Obtén la URL de la primera imagen si existe

  return (
    <div className="flex items-center p-2 space-x-2 space-y-2 h-10 w-36 text-gray-500 cursor-pointer">
      {image && <img src={image} width={50} height={30} alt="" />}
      <p className="text-sm">{Playlist.name}</p>
    </div>
  );
};

export default PlayListCard
