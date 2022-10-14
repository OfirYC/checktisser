const arbiscanKey = "RNKVHZ48JUEF3E5PTMIJ2KUUPVIZM92RHB";
const arbiscanGetAbi = `https://api.arbiscan.io/api?module=contract&action=getabi&address=${addy}&apikey=${arbiscanKey}`;
const polyscanKey = "Q7PQVWHN6NGM6GFKS9TMCXV93W6GJ5WAJP";
const polyscanGetAbi = `https://api.polygonscan.com/api?module=contract&action=getabi&address=${addy}&apikey=${polyscanKey}`;
export { arbiscanGetAbi, arbiscanKey, polyscanGetAbi, polyscanKey };
