
import axios from "axios";
export const getTickerData =  async (ticker: string) => {
   return  await axios.get(`http://localhost:5000/getTicker?symbol=${ticker}`);
};
  
export default getTickerData;



