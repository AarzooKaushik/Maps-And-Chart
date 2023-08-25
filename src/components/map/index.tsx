
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Maps from "./maps"; 

const queryClient = new QueryClient();

function Map() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
       
        <Maps />
      </div>
    </QueryClientProvider>
  );
}

export default Map;
