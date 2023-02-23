import { Ticker } from "../model";

import {getCoinName} from "../utils/getCoinName"

type Props = {
    coin: Ticker;
  };
  
  const Crypto = ({ coin }: Props) => {
    return (
      <div className="flex flex-col mb-4 ml-0 p-4 border-2 border-gray-600 border-solid rounded shadow-lg w-full md:w-80 md:m-4">
        <div className="flex justify-between align-middle">
          <h1 className="font-bold text-lg mr-2">{getCoinName(coin.baseAsset)}</h1>
          <span className="text-gray-400"></span>
        </div>
  
        <span className="font-medium text-2xl text-yellow-600 py-2">
        $ {coin.lastPrice}
        </span>
  
        <div className="flex align-middle justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Volume:</span>
            <span className="font-medium text-green-500">
            {coin.volume}
            </span>
          </div>
  
          <div className="flex flex-col">
            <span className="text-sm">Openprice:</span>
            <span className="font-medium text-gray-500">
              {coin.openPrice}
            </span>
          </div>

          <div className="flex align-middle justify-between">
          <div className="flex flex-col">
            <span className="text-sm">Lowprice:</span>
            <span className="font-medium text-gray-500">
            {coin.lowPrice}
            </span>
          </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Crypto;