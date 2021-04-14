import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ stocks }) => {
  if (stocks.data === undefined) {
    return (
      <div>
        <p>Fetching data</p>
      </div>
    );
  }
  return (
    <div>
      <Bar
        width={800}
        height={600}
        options={{
          maintainAspectRatio: false,
        }}
        data={{
          labels: [
            stocks.data[0].attributes.symbol,
            stocks.data[1].attributes.symbol,
            stocks.data[2].attributes.symbol,
            stocks.data[3].attributes.symbol,
            stocks.data[4].attributes.symbol,
            stocks.data[5].attributes.symbol,
            stocks.data[6].attributes.symbol,
            stocks.data[7].attributes.symbol,
            stocks.data[8].attributes.symbol,
            stocks.data[9].attributes.symbol,
            stocks.data[10].attributes.symbol,
            stocks.data[11].attributes.symbol,
            stocks.data[12].attributes.symbol,
            stocks.data[13].attributes.symbol,
            stocks.data[14].attributes.symbol,
            stocks.data[15].attributes.symbol,
            stocks.data[16].attributes.symbol,
            stocks.data[17].attributes.symbol,
            stocks.data[18].attributes.symbol,
            stocks.data[19].attributes.symbol,
          ],
          datasets: [
            {
              label: "# of posts",
              data: [
                stocks.data[0].attributes.post_count,
                stocks.data[1].attributes.post_count,
                stocks.data[2].attributes.post_count,
                stocks.data[3].attributes.post_count,
                stocks.data[4].attributes.post_count,
                stocks.data[5].attributes.post_count,
                stocks.data[6].attributes.post_count,
                stocks.data[7].attributes.post_count,
                stocks.data[8].attributes.post_count,
                stocks.data[9].attributes.post_count,
                stocks.data[10].attributes.post_count,
                stocks.data[11].attributes.post_count,
                stocks.data[12].attributes.post_count,
                stocks.data[13].attributes.post_count,
                stocks.data[14].attributes.post_count,
                stocks.data[15].attributes.post_count,
                stocks.data[16].attributes.post_count,
                stocks.data[17].attributes.post_count,
                stocks.data[18].attributes.post_count,
                stocks.data[19].attributes.post_count,
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
