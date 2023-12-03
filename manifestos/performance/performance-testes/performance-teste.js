// import necessary modules
import { check } from "k6";
import http from "k6/http";

// define configuration
export const options = {
  // define thresholds
  thresholds: {
    http_req_failed: [{ threshold: "rate<0.01", abortOnFail: true }], // availability threshold for error rate
   // http_req_duration: ["p(90)<1000"], // Latency threshold for percentile
  },
  // define scenarios
  scenarios: {
    breaking: {
      executor: "ramping-vus",
      stages: [
        { duration: "10s", target: 20 },
        { duration: "10s", target: 100 },
        { duration: "20s", target: 300 },
        { duration: "20s", target: 400 },
        { duration: "20s", target: 600 },
        { duration: "20s", target: 800 },
        { duration: "60s", target: 1000 },
        { duration: "10s", target: 500 },
        { duration: "10s", target: 250 },
        { duration: "10s", target: 20 },
        //....
      ],
    },
  },
};

export default function () {
  // define URL and request body
  const url = "https://giropops-senhas.ibmenezes.com";

  // send a post request and save response as a variable
  const res = http.post(url);

  // check that response is 200
  check(res, {
    "response code was 200": (res) => res.status == 200,
  });
}


