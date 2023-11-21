const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

// infoData를 fetch 해오는 코드 대신 query 작성
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory (coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000); // 현재 시간
  // const startDate = endDate - 60 * 60 * 24 * 7; // 일주일 전
  // return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then((response) =>
  //   response.json()
  // );
  const BASE_URL = `https://ohlcv-api.nomadcoders.workers.dev`; // 날짜검색 부분 api 유료화로 강의 자체 제공 api로 변경
  return fetch(`${BASE_URL}/?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
