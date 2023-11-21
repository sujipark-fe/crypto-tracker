import { GlobalStyle } from "./style/common";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
// import { QueryClient, QueryClientProvider } from "react-query";

// const queryClient = new QueryClient();

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
