// import React from "react";
// import {
//     useCryptoPrices,
//     CryptoPriceProvider,
// } from "react-realtime-crypto-prices";

// const HookExample = () => {
//     const prices = useCryptoPrices(["btc", "eth", "usdt", "bnb", "usdc" ,"xrp" , "busd" ," ada" ," doge" , "matic", " okb","steth","sol","dot","shib"]);
//     const data = JSON.stringify(prices)
//     console.log(data)
//     return (
//         <>
//             <div>Live Prices</div>
//             <div>{data}</div>
//         </>
//     );
// };

// const Crypto = () => {
//     return (
//         <div className="App">
//             <CryptoPriceProvider>
//                 <HookExample  cryptoCompareApiKey="0ffd426e05f6800fd35e540bcc7d3199a05b7993d7acb6e45144c11adfde6393"/>
//             </CryptoPriceProvider>
//         </div>
//     );
// };

// export default Crypto;