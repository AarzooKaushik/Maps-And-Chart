// src/App.tsx
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import LineGraph from "./lineGraph";


const queryClient = new QueryClient();

const Graph: React.FC = () => {
  return (
    <div className="overflow-scroll py-4 px-5">
    <QueryClientProvider client={queryClient}>
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">COVID-19 Dashboard</h1>
        <div className="dashboard">
          <LineGraph />
        
        </div>
      </div>
    </QueryClientProvider>
    </div>
  );
};

export default Graph;
