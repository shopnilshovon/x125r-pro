"use client";
import { useState } from "react";

export default function WalletConnect() {
  const [account, setAccount] = useState("");

  async function connect() {
    if ((window as any).ethereum) {
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
    }
  }

  return (
    <div className="p-6 text-right">
      <button
        onClick={connect}
        className="px-6 py-2 bg-green-400 text-black rounded-xl"
      >
        {account ? account.slice(0,6) + "..." : "Connect Wallet"}
      </button>
    </div>
  );
}
