"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogIn, LogOut, Menu, X } from "lucide-react";
import { Archivo_Black } from "next/font/google";
import { useUser } from "@auth0/nextjs-auth0/client";

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, error, isLoading } = useUser();

  const links = [
    { id: 1, link: "/", text: "home" },
    { id: 2, link: "/about", text: "my portfolio" },
    { id: 3, link: "/conditions-treated", text: "recommendations" },
    { id: 4, link: "/contact", text: "contact" },
  ];

  useEffect(() => {
    // Check if dark mode is enabled
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes in color scheme
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handleChange);

    // Load TradingView widget
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "Nasdaq 100",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR/USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "NASDAQ:NVDA",
          title: "Nvidia",
        },
        {
          proName: "NASDAQ:MSFT",
          title: "Microsoft",
        },
        {
          proName: "NYSE:MA",
          title: "Mastercard",
        },
        {
          proName: "NASDAQ:AAPL",
          title: "Apple",
        },
        {
          proName: "NASDAQ:META",
          title: "Meta",
        },
        {
          proName: "NASDAQ:TSLA",
          title: "Tesla",
        },
        {
          proName: "NASDAQ:GOOGL",
          title: "Google",
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "compact",
      colorTheme: isDarkMode ? "dark" : "light",
      locale: "en",
    });
    document.getElementById("tradingview-widget")?.appendChild(script);

    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#081d2b] shadow-md">
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image src="/Stockwavelogo.png" alt="Logo" width={60} height={60} className="mr-2" />
            <Image src="/Stockwavetextwhite.png" alt="Logo" width={200} height={60} className="mr-2" />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 flex-1 justify-center">
          {links.map(({ id, link, text }) => (
            <li
              key={id}
              className="nav-links cursor-pointer capitalize font-semibold text-white hover:scale-110 transition-all duration-200"
            >
              <Link href={link}>{text}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center flex-1 justify-end space-x-4">
          {isLoading ? (
            <div className="text-white">Loading...</div>
          ) : error ? (
            <div className="text-red-500">Error: {error.message}</div>
          ) : user ? (
            <>
              <div className="text-white">Welcome, {user.name || user.email}</div>
              <Link href="/api/auth/logout">
                <button className="bg-[#fed001] text-[#081d2b] px-6 py-2 rounded-full hover:bg-white transition duration-300 flex items-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </Link>
            </>
          ) : (
            <Link href="/api/auth/login">
              <button className="bg-[#fed001] text-[#081d2b] px-6 py-2 rounded-full hover:bg-white transition duration-300 flex items-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                <LogIn size={20} />
                <span>Login</span>
              </button>
            </Link>
          )}
          <button
            onClick={() => setNav(!nav)}
            className="ml-4 p-2 rounded-full hover:bg-[#fed001] hover:text-[#081d2b] transition-colors duration-200 md:hidden"
          >
            {nav ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {nav && (
          <div className="fixed inset-0 bg-[#081d2b] bg-opacity-95 z-50 md:hidden">
            <div className="flex flex-col h-full w-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center" onClick={() => setNav(false)}>
                  <div className="w-12 h-12 bg-[#fed001] rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#081d2b] text-2xl font-bold">L</span>
                  </div>
                  <span className="text-2xl font-bold text-[#fed001]">Logo</span>
                </Link>
                <button
                  onClick={() => setNav(false)}
                  className="p-2 rounded-full hover:bg-[#fed001] hover:text-[#081d2b] transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col space-y-6">
                {links.map(({ id, link, text }) => (
                  <li
                    key={id}
                    className="nav-links cursor-pointer capitalize font-medium text-white hover:scale-110 transition-all duration-200 text-lg"
                  >
                    <Link href={link} onClick={() => setNav(false)}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {isLoading ? (
                  <div className="text-white">Loading...</div>
                ) : error ? (
                  <div className="text-red-500">Error: {error.message}</div>
                ) : user ? (
                  <>
                    <div className="text-white mb-4">Welcome, {user.name || user.email}</div>
                    <Link href="/api/auth/logout">
                      <button className="w-full bg-[#fed001] text-[#081d2b] px-6 py-2 rounded-full hover:bg-white transition duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                        <LogOut size={20} />
                        <span>Logout</span>
                      </button>
                    </Link>
                  </>
                ) : (
                  <Link href="/api/auth/login">
                    <button className="w-full bg-[#fed001] text-[#081d2b] px-6 py-2 rounded-full hover:bg-white transition duration-300 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                      <LogIn size={20} />
                      <span>Login</span>
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-white z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-white z-10"></div>
        <div id="tradingview-widget" className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
