import React, { useState, useEffect } from "react";
import {Ticker} from '../src/model/index'
import CoinsList from "./components/ListData";
import useFetchInInterval from "../src/hooks";
import ListData from "./components/ListData";

function App() {
  const [coins, setCoins] = useState<Ticker[]>([]);

  const { data, loading, error, updating } = useFetchInInterval({
    intervalMS: 10000 * 10,
});

useEffect(() => {
  if(data != null){
    type ticker = Array<Ticker>;
    const tickerData = data as Ticker[];
    setCoins(tickerData);
  }
}, [data]);



  return (
    <div className="flex flex-col w-full h-full">
      <nav className="flex flex-col m-5  lg:my-5 border-b-2 border-gray-100 py-6">
      <div className="flex items-center">
        <span className="text-2xl font-bold text-indigo-900 ml-2">
          Cryptocurrency Realtime Price
        </span>
      </div>
    </nav>

      <div className="flex flex-col mx-5 mb-5 lg:mx-20">
       <span className="font-semibold mr-2"></span> 
       <ListData
          coins={coins}
          loading={loading}
          reset={() => setCoins([])}
        />            
      </div>
    </div>
  );
}

export default App;
