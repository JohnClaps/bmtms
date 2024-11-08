import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChart = () => {
  const [chartData, setChartData] = useState({});  // Keep initial state empty

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/mineral_extraction');
        const data = response.data;

        // Format data for pie chart
        const mineralTypes = [...new Set(data.map(item => item.mineralType))];
        const totalExtractionAmounts = mineralTypes.map(type => {
          return data
            .filter(item => item.mineralType === type)
            .reduce((sum, item) => sum + parseFloat(item.extractionAmount), 0);
        });

        setChartData({
          labels: mineralTypes,
          datasets: [
            {
              data: totalExtractionAmounts,
              backgroundColor: mineralTypes.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`)
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Check if data is ready before rendering the chart
  return (
    <div>
      <h3>Extraction by Mineral Type</h3>
      {chartData && chartData.labels ? (
        <Pie data={chartData} />
      ) : (
        <p>Loading chart data...</p>  // Display loading message if data isn't ready
      )}
    </div>
  );
};

export default PieChart;
