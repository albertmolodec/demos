import { setupWorker } from "msw/browser";
import { delay, http, HttpResponse } from "msw";
import { population } from "./population";
import { gdp } from "./gdp";

const handlers = [
  http.get("/api/population", async () => {
    await delay(1000);

    return HttpResponse.json({
      data: population,
      sum: population.reduce((acc, { population }) => acc + population, 0),
    });
  }),

  http.get("/api/gdp", async () => {
    await delay(1000);

    return HttpResponse.json({
      data: gdp,
      sum: 25_744_108,
    });
  }),
];

export const worker = setupWorker(...handlers);
