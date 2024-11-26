import TradingViewMarketNews from "../../../components/market-news";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row mt-44">
        <div className="md:w-2/3 md:pr-4 mb-4 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">Welcome to Stockwave</h1>
          <p className="mb-4">This is your personalized dashboard for stock market insights and analysis.</p>
          <p className="mb-4">
            Stay informed with real-time market data, personalized stock recommendations, and comprehensive financial news coverage.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Key Features:</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Real-time stock quotes and market data</li>
            <li>Personalized stock watchlists</li>
            <li>Advanced charting tools and technical analysis</li>
            <li>Breaking financial news and expert commentary</li>
            <li>Portfolio tracking and performance analysis</li>
          </ul>
          <p className="mb-4">
            Whether you're a seasoned investor or just starting out, Stockwave provides the tools and insights you need to make informed
            investment decisions.
          </p>
          <button className="bg-[#fed001] text-[#081d2b] px-6 py-2 rounded-full font-semibold hover:bg-[#e6bc01] transition duration-300">
            Explore Markets
          </button>
        </div>
        <div className="md:w-1/3">
          <TradingViewMarketNews />
        </div>
      </div>
    </div>
  );
}
