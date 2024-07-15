export type Currency = "usd" | "eur";

export type MarketOrder = "market_cap_desc" | "market_cap_asc";

export type CoinsWithMarket = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  circulating_supply: number;
};

export type TableData = {
  key: string;
  name: string;
  price: string;
  supply: string;
  image: string;
  currency: Currency;
};
