import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/mineral_extraction');
        const data = response.data;
        console.log("Fetched data:", data); // Debugging output

        // Ensure data is not empty before proceeding
        if (data.length > 0) {
          const labels = [...new Set(data.map(item => item.productiondate))];
          const minerals = [...new Set(data.map(item => item.mineraltype))];

          const datasets = minerals.map(mineral => ({
            label: mineral,
            data: labels.map(label => {
              const item = data.find(d => d.productiondate === label && d.mineraltype === mineral);
              return item ? item.totalextraction : 0;
            }),
            borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
            fill: false,
          }));

          setChartData({
            labels,
            datasets,
          });
        } else {
          console.warn("No data received from API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h3>Mineral Extraction Over Time</h3>
      {chartData.labels.length > 0 ? (
        <Line data={chartData} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default LineChart;
