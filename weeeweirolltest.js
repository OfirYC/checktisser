import axios from "axios";
import ethers from "ethers";

import { polygonInfura, arbitrumInfura } from "./node-rpcs.js";
const wallet = new ethers.Wallet(
  "b949422663d60a0841453b2a1d7693164211a214e81b7ab5dd7ddacfcfff34c3"
);

const p1address = "0xbf22f0f184bccbea268df387a49ff5238dd23e40";
const p2address = "0xea8dfee1898a7e0a59f7527f076106d7e44c2176";

const arbiscanKey = "RNKVHZ48JUEF3E5PTMIJ2KUUPVIZM92RHB";

const infuraUrl = arbitrumInfura;
const provider = new ethers.providers.JsonRpcProvider(infuraUrl);
let walletSniper = wallet.connect(provider);

export const getAbi = async (address) => {
  const url = `https://api.arbiscan.io/api?module=contract&action=getabi&address=${address}&apikey=${arbiscanKey}`;
  const abi = await axios.get(url);
  console.log(abi);
  return abi;
};

getAbi(p1address);

/* const p1Abi = await getAbi(p1address);

const p2Abi = await getAbi(p2address);

const p1contract = new ethers.Contract(p1address, p1Abi);

const p2contract = new ethers.Contract(p2address, p2Abi);

const p1wrapper = weiroll.Contract.createLibrary(p1contract);

const p2wrapper = weiroll.Contract.createLibrary(p2contract);

const planner = new weiroll.Planner();

planner.add(p1wrapper.addLiquidityETH().withValue(9986662045877037));
planner.add(p2wrapper.deposit(2, 9966662045877037)); */
