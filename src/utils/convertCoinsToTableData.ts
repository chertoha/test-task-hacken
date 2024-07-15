import { CoinsWithMarket, Currency, TableData } from "@/types/entities";

const convertCoinsToTableData = (
  coins: CoinsWithMarket[],
  currency: Currency
): TableData[] =>
  coins.map(({ id, name, current_price, circulating_supply, image }) => ({
    key: id,
    name,
    price: current_price.toString(),
    supply: circulating_supply.toString(),
    image,
    currency,
  }));

export default convertCoinsToTableData;
