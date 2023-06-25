"use client";

import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import { headers } from "../next.config";

export const ReleaseContext = createContext();

const ReleaseContextProvider = ({ children }) => {
  const [newRelease, setNewRelease] = useState([]);
  const [recentTracks, setRecentTracks] = useState([]);
  const [featuredPlayList, setFeaturedPlayList] = useState([]);
  const { data: session } = useSession();
  const getNewRelease = async () => {
    if (session && session.accessToken) {
      const res = await fetch(
        `https://api.spotify.com/v1/browse/new-releases?limit=8`,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );
      let data = await res.json();
      setNewRelease(data.albums.items);
    }
  };

  const getRecentlyTracks = async () => {
    if (session && session.accessToken) {
      const res = await fetch(
        `https://api.spotify.com/v1/me/player/recently-played?limit=8`,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );
      let data = await res.json();
      setRecentTracks(data.items);
    }
  };

  const getFeaturedPlayList = async () => {
    if (session && session.accessToken) {
      const res = await fetch(
        `https://api.spotify.com/v1/browse/featured-playlists?limit=6`,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );
      let data = await res.json();
      setFeaturedPlayList(data.playlists.items);
    }
  };

  useEffect(() => {
    getNewRelease();
    getRecentlyTracks();
    getFeaturedPlayList();
  }, [session]);

  return (
    <ReleaseContext.Provider
      value={{ newRelease, recentTracks, featuredPlayList }}
    >
      {children}
    </ReleaseContext.Provider>
  );
};

export default ReleaseContextProvider;
