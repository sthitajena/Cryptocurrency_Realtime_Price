import { useEffect, useState } from "react";
import  getTickerData from "../api/index";
import coins from "../utils/supported-coins.json";
import {Ticker} from '../model/index'

var cache = require('memory-cache');

const useFetchInInterval = ({ intervalMS }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        if (data.length >= 5) {
            setUpdating(false);
            setLoading(false);
        }
    }, [data]);

    useEffect(() => {
       
        const sendRequest = async (interval) => {
            setUpdating(true);
            try {
                var i = 0;
                (function loopIt(i) {
                  setTimeout(async function(){
                     if(cache.get(coins.rows[i].code.concat('usdt')) == null){
                        const response = await getTickerData(coins.rows[i].code.concat('usdt'));
                        cache.put(coins.rows[i].code.concat('usdt'), response.data, 10000) ;
                        
                        var index = data.findIndex(x=> x.symbol === coins.rows[i].code.concat('usdt'));
                            if (index === -1) {
                                setData(current => [...current, response.data]); 
                            }else{
                                setData(
                                        [
                                        ...data.slice(0,index),
                                            Object.assign({}, data[index], response.data),
                                        ...data.slice(index+1)
                                        ]
                                    );
                            }
                    
                     } 
                     if(i < coins.rows.length - 1)  loopIt(i+1)
                    }, 1500);
                })(i)     
            } catch (error) {
                setError(true);
                clearInterval(interval);
            } finally {
                //setUpdating(false);
                //setLoading(false);
            }
        };

        sendRequest();
        const interval = setInterval(() => sendRequest(interval), intervalMS);
        return () => clearInterval(interval);
    }, [intervalMS]);

    return { data, error, loading, updating };
};

export default useFetchInInterval;