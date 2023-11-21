// import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Container, Header, Title, Loader, CoinsList, Coin, Img } from "../style/CoinsStyle";

interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins() {
  // useQuery({ queryKey(쿼리 고유 식별자), queryFn(fetcher 함수) });
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 100).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}/chart`,
                  state: { name: coin.name }
                }}
              >
                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={`${coin.name}`} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
