import { setupWorker } from "msw/browser";
import { delay, http, HttpResponse } from "msw";
import { population } from "./population";

const handlers = [
  http.get("/api/population", async () => {
    await delay(1000);

    return HttpResponse.json(
      {
        data: population,
        sum: population.reduce((acc, { population }) => acc + population, 0),
      },
      {
        status: 200,
      }
    );
  }),
];

export const worker = setupWorker(...handlers);
