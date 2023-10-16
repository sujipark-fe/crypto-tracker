import { useLocation, useParams } from "react-router";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Container, Header, Title, Loader } from "./Coins";

interface RouteParams {
  coinId: string;
}

interface RouteState {
  name: string
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  const { state } = useLocation<RouteState>();
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(infoData);
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      { loading ? <Loader>Loading...</Loader> : <span>{info.hello}</span> }
    </Container>
  );
}
export default Coin;
