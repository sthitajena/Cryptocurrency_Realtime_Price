import { useEffect, useState } from "react";
import getTickerData from "../api/index";
import coins from "../utils/supported-coins.json";

var cache = require("memory-cache");

const useFetchInInterval = ({ intervalMS }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (data.length >= 7) {
      setTimeout(async function () {
        if (updating) setUpdating(false);
      }, 3000);
      setLoading(false);
    }
  }, [data, updating]);

  useEffect(() => {
    const sendRequest = async (interval) => {
      try {
        var i = 0;
        (function loopIt(i) {
          setTimeout(async function () {
            if (cache.get(coins.rows[i].code.concat("usdt")) === null) {
              setUpdating(true);
              const response = await getTickerData(
                coins.rows[i].code.concat("usdt")
              );
              cache.put(
                coins.rows[i].code.concat("usdt"),
                response.data,
                60000
              );

              var index = data.findIndex(
                (x) => x.symbol === coins.rows[i].code.concat("usdt")
              );
              if (index === -1) {
                setData((current) => [...current, response.data]);
              } else {
                setData([
                  ...data.slice(0, index),
                  Object.assign({}, data[index], response.data),
                  ...data.slice(index + 1),
                ]);
              }
            }

            if (i < coins.rows.length - 1) loopIt(i + 1);
          }, 1500);
        })(i);
      } catch (error) {
        setError(true);
        clearInterval(interval);
      }
    };

    sendRequest();
    const interval = setInterval(() => sendRequest(interval), intervalMS);
    return () => clearInterval(interval);
  }, [intervalMS, data]);

  return { data, error, loading, updating };
};

export default useFetchInInterval;
