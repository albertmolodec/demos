import { CircularProgress } from "@mui/material";
import React from "react";
import useSWR, { type Fetcher } from "swr";

class ErrorWithStatus extends Error {
  status?: number;
  statusText?: string;

  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export const ErrorWidget = () => {
  const response = useSWR<any, ErrorWithStatus, string>(
    "/api/authorized-only",
    async (url) => {
      const res = await fetch(url);

      if (!res.ok) {
        const error = new ErrorWithStatus(
          "An error occurred while fetching the data."
        );
        error.status = res.status;
        error.statusText = res.statusText;
        throw error;
      }

      return res.json();
    }
  );

  if (response.isLoading) return <CircularProgress />;

  return (
    <div>
      <p>
        Can't fetch data from <code>/api/authorized-only</code>.
      </p>
      <p>
        {response.error?.status}: {response.error?.statusText}
      </p>
    </div>
  );
};
