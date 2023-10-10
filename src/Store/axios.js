import axios from "axios";
import { apiBaseUrl } from "./apiBaseUrl";

const instance = axios.create({
  baseURL: apiBaseUrl, // Your API base URL
  // Add any other global Axios configuration options here
  // For example, you can set a timeout, headers, etc.
  timeout: 5000, // Set a timeout for requests (in milliseconds)
});

// Add CORS-related headers
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*"; // Set the appropriate origin or "*" for all origins
instance.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE"; // Set the allowed HTTP methods
instance.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, Content-Type, Accept"; // Set the allowed headers

export default instance;
