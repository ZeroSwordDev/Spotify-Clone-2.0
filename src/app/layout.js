'use client'

import AuthProvider from "../../components/AuthProvider";
import AuthContextProvider from "../../context/AuthContext";
import ReleaseContextProvider from "../../context/NewReleases";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AuthContextProvider>
            <ReleaseContextProvider>{children}</ReleaseContextProvider>
          </AuthContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
