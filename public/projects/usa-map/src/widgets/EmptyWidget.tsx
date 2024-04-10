import React from "react";
import useSWR, { type Fetcher } from "swr";

export const EmptyWidget = () => {
  const { data, isLoading } = useSWR("/api/empty", (...args) =>
    fetch(...args).then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;

  if (data.length === 0) return <p>No items found</p>;

  return null;
};
