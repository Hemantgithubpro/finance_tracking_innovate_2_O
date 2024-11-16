"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Search, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";

interface StockData {
  c: number; // close price
  h: number; // high price
  l: number; // low price
  n: number; // number of transactions
  o: number; // open price
  t: number; // timestamp
  v: number; // trading volume
  vw: number; // volume weighted average price
}

interface FormattedStockData {
  date: string;
  close: number;
  high: number;
  low: number;
  open: number;
  volume: number;
}

export default function StocksPage() {
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const [stockData, setStockData] = useState<FormattedStockData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "19FSVLLes0NB2U6JLFhoy1XDeVrnpZU7";

  const fetchStockData = async () => {
    setLoading(true);
    setError("");
    
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    try {
      const response = await fetch(
        `https://api.polygon.io/v2/aggs/ticker/${stockSymbol}/range/1/day/${startDate}/${endDate}?adjusted=true&sort=asc&apiKey=${API_KEY}`
      );
      
      const data = await response.json();
      
      if (data.results) {
        const formattedData = data.results.map((item: StockData) => ({
          date: new Date(item.t).toLocaleDateString(),
          close: item.c,
          high: item.h,
          low: item.l,
          open: item.o,
          volume: item.v,
        }));
        setStockData(formattedData);
      } else {
        setError("No data available for this stock symbol");
      }
    } catch (err) {
      setError("Failed to fetch stock data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  const getStockPerformance = () => {
    if (stockData.length < 2) return { change: 0, percentage: 0 };
    const firstPrice = stockData[0].close;
    const lastPrice = stockData[stockData.length - 1].close;
    const change = lastPrice - firstPrice;
    const percentage = (change / firstPrice) * 100;
    return { change, percentage };
  };

  const performance = getStockPerformance();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stock Market Analysis</h1>

      <div className="flex gap-4 mb-6">
        <Input
          type="text"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value.toUpperCase())}
          placeholder="Enter stock symbol (e.g., AAPL)"
          className="max-w-xs"
        />
        <Button onClick={fetchStockData} disabled={loading}>
          <Search className="h-4 w-4 mr-2" />
          {loading ? "Loading..." : "Search"}
        </Button>
      </div>

      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}

      {stockData.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Price</p>
                  <h2 className="text-2xl font-bold">${stockData[stockData.length - 1].close.toFixed(2)}</h2>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Price Change</p>
                  <h2 className={`text-2xl font-bold ${performance.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {performance.change >= 0 ? '+' : ''}{performance.change.toFixed(2)}
                  </h2>
                </div>
                {performance.change >= 0 ? (
                  <ArrowUp className="h-8 w-8 text-green-500" />
                ) : (
                  <ArrowDown className="h-8 w-8 text-red-500" />
                )}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Percentage Change</p>
                  <h2 className={`text-2xl font-bold ${performance.percentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {performance.percentage >= 0 ? '+' : ''}{performance.percentage.toFixed(2)}%
                  </h2>
                </div>
                {performance.percentage >= 0 ? (
                  <ArrowUp className="h-8 w-8 text-green-500" />
                ) : (
                  <ArrowDown className="h-8 w-8 text-red-500" />
                )}
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Price History</h2>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stockData}>
                  <XAxis dataKey="date" />
                  <YAxis domain={['auto', 'auto']} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="close"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Trading Volume</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stockData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="volume"
                      stroke="#10b981"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Price Range</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stockData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="high"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={false}
                      name="High"
                    />
                    <Line
                      type="monotone"
                      dataKey="low"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                      name="Low"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}