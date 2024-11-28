"use client";

import TradingViewTicker from "../../../components/single-ticker";
import TradingViewMarketNews from "../../../components/market-news";

const stockTickers = [
  { symbol: "NYSE:MA", name: "Mastercard", rating: "Buy" },
  { symbol: "NASDAQ:AAPL", name: "Apple", rating: "Buy" },
  { symbol: "NASDAQ:GOOGL", name: "Alphabet", rating: "Hold" },
  { symbol: "NYSE:V", name: "Visa", rating: "Buy" },
  { symbol: "NASDAQ:MSFT", name: "Microsoft", rating: "Buy" },
  { symbol: "NYSE:JPM", name: "JPMorgan Chase", rating: "Hold" },
  { symbol: "NYSE:JNJ", name: "Johnson & Johnson", rating: "Sell" },
  { symbol: "NYSE:WMT", name: "Walmart", rating: "Hold" },
  { symbol: "NASDAQ:AMZN", name: "Amazon", rating: "Buy" },
] as const;

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row mt-44">
        <div className="md:w-2/3 md:pr-8 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-6">Stockwave S-tier</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stockTickers.map((stock, index) => (
              <div key={index} className="relative">
                {/* <h3 className="text-lg font-semibold mb-2">{stock.name}</h3> */}
                <TradingViewTicker symbol={stock.symbol} width="100%" rating={stock.rating} />{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">Market News</h2>
          <TradingViewMarketNews />
        </div>
      </div>
    </div>
  );
}
