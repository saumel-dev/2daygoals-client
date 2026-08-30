import "./globals.css";
import Navbar from "@/Components/Navbar";
import localFont from 'next/font/local';
import { Toast } from '@heroui/react';
import Footer from "@/Components/Footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const lufga = localFont({
  src: [
    {
      path: "../../public/fonts/Lufga-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lufga-Bold.otf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-lufga",
})

const helveticaNow = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNowDisplay-Bold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNowDisplay-Regular.woff2",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-helvetica-now",
})

export const metadata = {
  title: "2daygoals",
  description: "Get work done the fastest way possible - manage tasks, write notes, organize projects, and share whatever you want with this powerful productivity tool!",
};

export default async function RootLayout({ children }) {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <html
      lang="en"
      className={`${lufga.variable} ${helveticaNow.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="relative min-h-full flex flex-col font-sans antialiased overflow-x-hidden w-full">
        {/* Background Decorative Container */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <img
            src="/assets/hero.svg"
            alt=""
            className="absolute -right-[7%] -top-2 w-[420px] max-w-none select-none sm:w-[520px] lg:w-[1000px]"
          />
        </div>

        <Navbar initialUser={session?.user ?? null}></Navbar>
        <main className="relative z-10 flex-1">
          <Toast.Provider placement="top"></Toast.Provider>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}