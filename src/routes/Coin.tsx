import { Switch, Route, useLocation, useParams, useRouteMatch, Link } from "react-router-dom";
import { Container, Header, BtnBack, Title, Loader} from "../style/CoinsStyle";
import { Overview, OverviewItem, Description, Tabs, Tab} from "../style/CoinStyle";
import Chart from "./Chart";
import Price from "./Price";
import { useQuery } from "react-query";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import {ReactComponent as IconBack} from "../assets/back.svg";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: string[];
  team: any[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: any;
  links_extended: any[];
  whitepaper: {
    link: string;
    thumbnail: string;
  };
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  const priceMatch = useRouteMatch("/:coinId/price");
  const chartMatch = useRouteMatch("/:coinId/chart");
  const { isLoading: infoLoading, data: infoData}  = useQuery<InfoData>(["info", coinId], () => fetchCoinInfo(coinId));
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(["tickers", coinId], () => fetchCoinTickers(coinId));
  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <Header>
        <Title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</Title>
        <BtnBack href={process.env.PUBLIC_URL}>
          <span className="blind">back</span>
          <IconBack />
        </BtnBack>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{infoData?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>

          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Tabs>
            <Tab $isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab $isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>

          <Switch>
            <Route path={`/:coinId/chart`}>
              <Chart coinId={coinId}/>
            </Route>
            <Route path={`/:coinId/price`}>
              <Price />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
export default Coin;

