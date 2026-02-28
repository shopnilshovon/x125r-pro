"use client";
import { useEffect, useState } from "react";
import { getPrice } from "../lib/price";

export default function AnalyticsDashboard() {
  const [price, setPrice] = useState("Loading...");
  const [supply] = useState("100,000,000");

  useEffect(() => {
    async function load() {
      try {
        const p = await getPrice(
          "PAIR_ADDRESS_HERE",
          "https://mainnet.infura.io/v3/YOUR_INFURA_KEY"
        );
        setPrice(p.toFixed(6));
      } catch {
        setPrice("Unavailable");
      }
    }
    load();
  }, []);

  return (
    <section className="p-20 bg-gray-950 text-center">
      <h2 className="text-4xl text-green-400 mb-10">Token Analytics</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-900 p-8 rounded-xl">
          <h3>Live Price</h3>
          <p className="text-2xl mt-4">{price}</p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3>Total Supply</h3>
          <p className="text-2xl mt-4">{supply}</p>
        </div>

        <div className="bg-gray-900 p-8 rounded-xl">
          <h3>Holders</h3>
          <p className="text-2xl mt-4">Coming Soon</p>
        </div>
      </div>
    </section>
  );
}
