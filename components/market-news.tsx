"use client";

import { useEffect, useRef } from "react";

export default function TradingViewMarketNews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "market",
      market: "stock",
      isTransparent: false,
      displayMode: "regular",
      width: 400,
      height: 550,
      colorTheme: "light",
      locale: "en",
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
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
