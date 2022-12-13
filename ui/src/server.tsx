import axios from "axios";

// const baseURL = "http://localhost:5000/";
const baseURL = "https://3439-197-210-79-117.eu.ngrok.io"; // https://758b-102-89-23-85.eu.ngrok.io

const server = axios.create({
  baseURL,
  headers: {
    "Cache-Control": "no-store",
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

// headers: {
//   "Cache-Control": "no-cache, no-store, must-revalidate",
//   "Content-Type": "application/json",
//   Pragma: "no-cache",
//   Expires: 0,
// },

export default server;
