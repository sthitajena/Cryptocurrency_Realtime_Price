import pageheadstyles from "../css/PageHead.module.css";
import { Ticker } from "../model";
import Crypto from "./Crypto";
import LiveData from "./LiveData";
import Loading from "./Loading";

type Props = {
  coins?: Ticker[];
  reset: () => void;
  loading: boolean;
  updating: boolean;
};

const ListData = ({ coins, loading, reset, updating }: Props) => {
  if (!coins && !loading) {
    return null;
  }

  const shouldRender = !loading;

  return (
    <>
      <div className={pageheadstyles.pagehead}>
        <div className={pageheadstyles.pagehead__content}>
          <h1>List of coins</h1>
          {shouldRender && <LiveData updating={updating} />}
        </div>
      </div>

      <div className="flex flex-row flex-wrap w-full">
        {loading ? [0, 1, 2].map((index) => <Loading key={index} />) : null}

        {coins && coins.length >= 8
          ? coins.map((coin) => <Crypto key={coin.symbol} coin={coin} />)
          : null}
      </div>
    </>
  );
};

export default ListData;
