import { setupWorker } from "msw/browser";
import { delay, http, HttpResponse } from "msw";
import { population, type StatePopulation } from "./population";
import { gdp, USA_GDP_IN_2022, type StateGDP } from "./gdp";

export type PopulationResponse = {
  items: StatePopulation[];
  sum: number;
};

export type GdpResponse = {
  items: StateGDP[];
  sum: number;
};

const handlers = [
  http.get("/api/population", async () => {
    await delay(500);

    return HttpResponse.json<PopulationResponse>({
      items: population,
      sum: population.reduce((acc, { population }) => acc + population, 0),
    });
  }),

  http.get("/api/empty", async () => {
    return HttpResponse.json([]);
  }),

  http.get("/api/authorized-only", async () => {
    await delay(2500);

    return HttpResponse.json(
      {},
      {
        status: 401,
        statusText: "You have to be authorized",
      }
    );
  }),

  http.get("/api/gdp", async () => {
    await delay(3000);

    return HttpResponse.json<GdpResponse>({
      items: gdp,
      sum: USA_GDP_IN_2022,
    });
  }),
];

export const worker = setupWorker(...handlers);
