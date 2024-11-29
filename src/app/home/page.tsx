"use client";

import TradingViewTicker from "../../../components/single-ticker";
import TradingViewMarketNews from "../../../components/market-news";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";

const stockTickersS = [
  { symbol: "NYSE:MA", name: "Mastercard", rating: "Buy" },
  { symbol: "NYSE:V", name: "Visa", rating: "Buy" },
  { symbol: "NASDAQ:MSFT", name: "Microsoft", rating: "Buy" },
  { symbol: "NYSE:VICI", name: "Vici Properties", rating: "Buy" },
] as const;

const stockTickersA = [
  { symbol: "NASDAQ:AAPL", name: "Apple", rating: "Sell" },
  { symbol: "NASDAQ:NVDA", name: "Microsoft", rating: "Buy" },
  { symbol: "NYSE:MCD", name: "McDonalds", rating: "Hold" },
  { symbol: "NYSE:DPZ", name: "Domino's Pizza", rating: "Hold" },
  { symbol: "NYSE:TOST", name: "Toast", rating: "Hold" },
  { symbol: "NASDAQ:BKNG", name: "Booking Holdings", rating: "Hold" },
  { symbol: "NYSE:SPGI", name: "S&P Global", rating: "Hold" },
] as const;

const stockTickersB = [
  { symbol: "NASDAQ:GOOGL", name: "Google", rating: "Buy" },
  { symbol: "NASDAQ:NFLX", name: "Netflix", rating: "Sell" },
  { symbol: "NASDAQ:AMZN", name: "Amazon", rating: "Hold" },
  { symbol: "NYSE:CMG", name: "Chipotle", rating: "Sell" },
  { symbol: "NASDAQ:SBUX", name: "Starbucks", rating: "Hold" },
  { symbol: "NASDAQ:COST", name: "Costco", rating: "Sell" },
  { symbol: "NYSE:KO", name: "Coca-Cola", rating: "Buy" },
  { symbol: "NASDAQ:MNST", name: "Monster Energy", rating: "Hold" },
  { symbol: "NASDAQ:FSLR", name: "First Solar", rating: "Buy" },
  { symbol: "NYSE:CP", name: "Canadian Pacific", rating: "Hold" },
  { symbol: "NASDAQ:QCOM", name: "Qualcomm", rating: "Buy" },
] as const;

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row mt-44">
        <div className="md:w-2/3 md:pr-8 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Our Recommended Companies</h2>
          <Tabs defaultValue="5-star" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 shadow-lg p-1">
              <TabsTrigger value="5-star" className="text-lg py-3 font-semibold">
                ★★★★★
              </TabsTrigger>
              <TabsTrigger value="4-star" className="text-lg py-3 font-semibold">
                ★★★★
              </TabsTrigger>
              <TabsTrigger value="3-star" className="text-lg py-3 font-semibold">
                ★★★
              </TabsTrigger>
            </TabsList>
            <TabsContent value="5-star">
              {/* <h2 className="text-2xl font-bold mb-4">Stockwave ★★★★★</h2> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stockTickersS.map((stock, index) => (
                  <div key={index} className="relative">
                    <TradingViewTicker symbol={stock.symbol} width="100%" rating={stock.rating} />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="4-star">
              {/* <h2 className="text-2xl font-bold mb-4">Stockwave ★★★★</h2> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stockTickersA.map((stock, index) => (
                  <div key={index} className="relative">
                    <TradingViewTicker symbol={stock.symbol} width="100%" rating={stock.rating} />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="3-star">
              {/* <h2 className="text-2xl font-bold mb-4">Stockwave ★★★</h2> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stockTickersB.map((stock, index) => (
                  <div key={index} className="relative">
                    <TradingViewTicker symbol={stock.symbol} width="100%" rating={stock.rating} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="md:w-1/3">
          <TradingViewMarketNews />
        </div>
      </div>
    </div>
  );
}
