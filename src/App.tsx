import React, { FC, useMemo, useState } from "react";
import convertCoinsToTableData from "./utils/convertCoinsToTableData";

import {
  Alert,
  Flex,
  Image,
  Select,
  Spin,
  Table,
  TableColumnsType,
} from "antd";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/duotone-light.css";
import { useGetCoinsQuery } from "./redux/coins/coinsApi";
import { Currency, MarketOrder, TableData } from "./types/entities";
import {
  API_DEFAULT_CURRENCY,
  API_DEFAULT_LIMIT,
  API_DEFAULT_ORDER,
  API_DEFAULT_PAGE,
  API_TOTAL_COUNT,
} from "./config/apiConfig";
import Title from "antd/es/typography/Title";
import { useGetCodeQuery } from "./redux/code/codeApi";

const Coin: FC<{ name: string; image: string }> = ({ name, image }) => (
  <Flex gap="middle" align="center">
    <Image width={32} src={image} alt={name} loading="lazy" />
    {name}
  </Flex>
);

const columns: TableColumnsType<TableData> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (name, { image }) => <Coin name={name} image={image} />,
  },
  {
    title: "Current Price",
    dataIndex: "price",
    key: "price",
    render: (price, { currency }) => (
      <span>
        {price} {currency}
      </span>
    ),
  },
  { title: "Circulating Supply", dataIndex: "supply", key: "supply" },
];

const selectCurrencyOptions: { value: Currency; label: string }[] = [
  { value: "usd", label: "USD" },
  { value: "eur", label: "EUR" },
];

const selectOrderOptions: { value: MarketOrder; label: string }[] = [
  { value: "market_cap_desc", label: "Market cap descending" },
  { value: "market_cap_asc", label: "Market cap ascending" },
];

const App: React.FC = () => {
  const [page, setPage] = useState(API_DEFAULT_PAGE);
  const [limit, setLimit] = useState<number>(API_DEFAULT_LIMIT);
  const [currency, setCurrency] = useState<Currency>(API_DEFAULT_CURRENCY);
  const [order, setOrder] = useState<MarketOrder>(API_DEFAULT_ORDER);

  const { data, isFetching, isError } = useGetCoinsQuery({
    vs_currency: currency,
    order,
    per_page: limit,
    page,
    sparkline: false,
  });

  const { data: code } = useGetCodeQuery();

  const tableData = useMemo(
    () => (data ? convertCoinsToTableData(data, currency) : []),
    [data, currency]
  );

  return (
    <>
      <h1 hidden>Hacken test task</h1>

      {isFetching && <Spin tip="Loading..." fullscreen></Spin>}

      {!isError ? (
        <Flex vertical gap={24}>
          <Title level={2} style={{ fontSize: 24 }}>
            Coins & Markets
          </Title>

          <Flex gap={24}>
            <Select
              defaultValue={selectCurrencyOptions[0].value}
              onChange={setCurrency}
              options={selectCurrencyOptions}
            />

            <Select
              defaultValue={selectOrderOptions[0].value}
              onChange={setOrder}
              options={selectOrderOptions}
            />
          </Flex>

          <Table
            dataSource={tableData}
            columns={columns}
            pagination={{
              pageSize: data?.length,
              total: API_TOTAL_COUNT,
              onChange: (page, limit) => {
                setLimit(limit);
                setPage(page);
              },
            }}
          />
        </Flex>
      ) : (
        <Alert
          message="Error Message"
          description="Sorry! Something went wrong"
          type="error"
        />
      )}

      <Flex vertical gap={24}>
        <Title level={2} style={{ fontSize: 24 }}>
          App source code
        </Title>

        <CodeMirror
          value={code}
          options={{
            lineNumbers: true,
          }}
        />
      </Flex>
    </>
  );
};

export default App;
