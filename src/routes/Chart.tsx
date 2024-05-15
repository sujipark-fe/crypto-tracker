import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

const ChartArea = styled.div`
  margin-top: 20px;
  .apexcharts-canvas {
    overflow: hidden;
    border-radius: 10px;
  }
`;

// 하루의 코인 데이터
interface IHistorical {
  time_open: string; // 시작 시간
  time_close: string; // 종료 시간
  open: number; // 시작가격
  high: number; // 최고가
  low: number; // 최저가
  close: number; // 종가
  volume: number; // 거래량
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  const date = data?.map((time)=> {
    const day = new Date(+time.time_close * 1000);
    // let year = day.getFullYear(); // 년도
    let month = day.getMonth() + 1;  // 월
    let date = day.getDate();  // 날짜
    return 'date: '+month+'/'+date;
  });
  console.log(date);

  return <ChartArea> {
    isLoading ? "Loading Chart..." : (
      <ApexChart
      type = "line"
      series={[
        {
          name: "price",
          data: data?.map((price)=>price.close) ?? []
        }
      ]}
      options = {{
        theme: {
          "mode": 'dark',
        },
        chart: {
          height: 500,
          width: 500,
          toolbar: {
            show: false
          },
          background: '#1e2f41',
        },
        grid: {
          borderColor: 'rgba(255,255,255,0.2)',
          strokeDashArray: 3,
        },
        stroke: {
          curve: 'smooth',
          width: 4,
          lineCap: 'butt',
          colors: ['#9c88ff']
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: { show: false},
          axisTicks: { show: false},
          tooltip: {
            enabled: false
          }
        },
        fill: {
          type: "gradient",
          gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
        },
        colors: ["#0fbcf9"],
        // colors: ['#9c88ff'],
        labels: date
      }}
    />)}
  </ChartArea>;
}

export default Chart;
