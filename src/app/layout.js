"use client";

import { Provider } from "react-redux";
import AuthProvider from "../../components/AuthProvider";
import AuthContextProvider from "../../context/AuthContext";
import ReleaseContextProvider from "../../context/NewReleases";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "../../redux/store";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <AuthProvider>
            <AuthContextProvider>
              <ReleaseContextProvider>{children}</ReleaseContextProvider>
            </AuthContextProvider>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  )
}
