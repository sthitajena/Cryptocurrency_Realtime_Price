//import { CoinModel } from "../../../types";
//import Button from "./Button";
//import Coin from "./Coin";
//import CoinSkeleton from "./CoinSkeleton";

import { Ticker } from "../model";
import Crypto from "./Crypto";
import Loading from "./Loading";

type Props = {
  coins?: Ticker[];
  reset: () => void;
  loading: boolean;
};

const ListData = ({ coins, loading, reset }: Props) => {
  if (!coins && !loading) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col justify-between md:flex-row py-2">
        <div className="flex flex-col">
          <h2 className="font-bold text-lg">Listed coins</h2>
          <span className="text-sm text-gray-700">
             Prices are updated in real time every 30 seconds
          </span>
        </div>

        
      </div>

      <div className="flex flex-row flex-wrap w-full">
      {loading
          ? [0, 1, 2].map((index) => <Loading key={index} />)
          : null}

        {coins && coins.length >= 5
          ? coins.map((coin) => <Crypto key={coin.symbol} coin={coin} />)
          : null}
      </div>
    </>
  );
};

export default ListData;