"use client";

import { Provider } from "react-redux";
import AuthProvider from "../../components/AuthProvider";
import AuthContextProvider from "../../context/AuthContext";
import ReleaseContextProvider from "../../context/NewReleases";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "../../redux/store";
import Sidebar from "../../components/Sidebar";
import Player from "../../components/Player";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <AuthProvider>
            <AuthContextProvider>
              <ReleaseContextProvider>
                <div className="flex">
                <Sidebar />
                {children}
                <Player />
                </div>
                
              </ReleaseContextProvider>
            </AuthContextProvider>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
