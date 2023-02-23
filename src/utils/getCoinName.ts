import coins from "./supported-coins.json";

export const getCoinName = (codename: string) => {
  const coin = coins.rows.find(
    (item) => item.code.toLowerCase() === codename.toLowerCase()
  );

  return coin?.name;
};