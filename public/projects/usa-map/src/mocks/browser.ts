import { setupWorker } from "msw/browser";
import { delay, http, HttpResponse } from "msw";

const handlers = [
  http.get("/api/apples", async () => {
    await delay(1000);

    return HttpResponse.json({
      data: {
        id: "1",
        name: "Macintosh",
      },
    });
  }),
];

console.log("init mocks");

export const worker = setupWorker(...handlers);
