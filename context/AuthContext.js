"use client";

import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import { headers } from "../next.config";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [playlistUserRecent, setplaylistUserRecent] = useState([]);
  const [x, setX] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    const getPlaylistUserRecent = async () => {
      if (session && session.accessToken) {
        setX(session.accessToken);
        const res = await fetch(`https://api.spotify.com/v1/me/playlists`, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });
        let data = await res.json();
        setplaylistUserRecent(data.items);
      }
    };
    getPlaylistUserRecent();
  }, [session]);

  return <AuthContext.Provider value={{playlistUserRecent}}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
