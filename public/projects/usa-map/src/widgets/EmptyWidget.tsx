import React from "react";
import useSWRImmutable from "swr/immutable";

export const EmptyWidget = () => {
  const { data, isLoading } = useSWRImmutable("/api/empty", (...args) =>
    fetch(...args).then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;

  if (data.length === 0) return <p>No items found</p>;

  return null;
};
