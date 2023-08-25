import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useQuery } from "react-query";
import axios from "axios";

const LineGraph: React.FC = () => {
  const { data: graphData } = useQuery("graphData", async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    
    const transformedData = Object.entries(response.data.cases).map(([date, cases]) => ({
      date,
      cases,
      deaths: response.data.deaths[date],
    }));
    
    return transformedData;
  });

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-xl mb-5">Line Chart</h2>
      {graphData && (
        <LineChart  width={window.innerWidth >= 600 ? 500 : 350} height={300} data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0,  'dataMax']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cases" stroke="#8884d8" />
          <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
        </LineChart>
      )}
    </div>
  );
};

export default LineGraph;
