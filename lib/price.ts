import { ethers } from "ethers";

const pairABI = [
  "function getReserves() view returns (uint112,uint112,uint32)"
];

export async function getPrice(pairAddress: string, rpc: string) {
  const provider = new ethers.JsonRpcProvider(rpc);
  const pair = new ethers.Contract(pairAddress, pairABI, provider);

  const [reserve0, reserve1] = await pair.getReserves();
  return Number(reserve1) / Number(reserve0);
}
