import { useEffect, useState } from "react";
import getTickerData from "../api/index";
import coins from "../utils/supported-coins.json";

var cache = require("memory-cache");

const useFetchInInterval = ({ intervalMS }) => {
  const [data, setData] = useState([]);
  const [dataFinal, setDataFinal] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (data.length >= 8 && dataFinal.length <= 0) {
      setDataFinal(data.slice());
    }
  }, [intervalMS, data]);

  useEffect(() => {
    if (data.length >= 8) {
      setTimeout(async function () {
        if (updating) setUpdating(false);
      }, 5000);
      setLoading(false);
    }
  }, [data, updating]);

  useEffect(() => {
    const sendRequest = async (interval) => {
      setUpdating(true);
      try {
        var i = 0;
        (function loopIt(i) {
          setTimeout(async function () {
            if (cache.get(coins.rows[i].code.concat("usdt")) === null) {
              const response = await getTickerData(
                coins.rows[i].code.concat("usdt")
              );
              cache.put(
                coins.rows[i].code.concat("usdt"),
                response.data,
                60000
              );

              var index = dataFinal.findIndex(
                (x) => x.symbol === coins.rows[i].code.concat("usdt")
              );
              if (index === -1) {
                setData((current) => [...current, response.data]);
              } else {
                setData([
                  ...dataFinal.slice(0, index),
                  Object.assign({}, dataFinal[index], response.data),
                  ...dataFinal.slice(index + 1),
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
  }, [intervalMS, dataFinal]);

  return { data, error, loading, updating };
};

export default useFetchInInterval;
