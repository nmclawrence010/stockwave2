"use client";

import { useEffect, useRef } from "react";

interface TradingViewTickerProps {
  symbol: string;
  width?: string;
  colorTheme?: "light" | "dark";
  isTransparent?: boolean;
  locale?: string;
  rating?: "Buy" | "Hold" | "Sell";
}

export default function TradingViewTicker({
  symbol,
  width = "350",
  colorTheme = "light",
  isTransparent = false,
  locale = "en",
  rating,
}: TradingViewTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: width,
      isTransparent: isTransparent,
      colorTheme: colorTheme,
      locale: locale,
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        const scriptElement = containerRef.current.querySelector("script");
        if (scriptElement) {
          containerRef.current.removeChild(scriptElement);
        }
      }
    };
  }, [symbol, width, isTransparent, colorTheme, locale]);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "Buy":
        return "bg-green-500";
      case "Hold":
        return "bg-yellow-500";
      case "Sell":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="relative border border-gray-200 rounded">
      <div className="tradingview-widget-container" ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
      <div className="absolute right-[1px] top-[1px] bottom-[1px] w-16 bg-white z-10"></div>
      {rating && (
        <div
          className={`
          absolute -top-[1px] -right-[1px] z-20 h-[68px] w-[68px] overflow-hidden
          before:content-[''] before:absolute before:top-0 before:right-0 before:border-t-[1px] before:border-r-[1px] before:-translate-x-[1px] before:-translate-y-[1px]
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:border-b-[1px] after:border-l-[1px] after:translate-x-[1px] after:translate-y-[1px]
        `}
        >
          <div
            className={`
            ${getRatingColor(rating)} 
            text-white 
            text-xs
            font-bold
            uppercase
            tracking-wider
            absolute
            w-[96px]
            text-center
            top-[19px]
            right-[-22px]
            rotate-45
            shadow-sm
          `}
          >
            {rating}
          </div>
        </div>
      )}
    </div>
  );
}
