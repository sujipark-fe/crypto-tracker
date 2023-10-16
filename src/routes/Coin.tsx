import { useParams } from "react-router";
import { Container, Header, Title, Loader } from "./Coins";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      { loading ? <Loader>Loading...</Loader> : null }
    </Container>
  );
}
export default Coin;
