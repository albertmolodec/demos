import { setupWorker } from "msw/browser";
import { http, HttpResponse } from "msw";

const handlers = [
  http.get("/api/apples", () => {
    console.log("handle apples");
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
