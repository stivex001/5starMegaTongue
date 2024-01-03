import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/index.js";
import QueryProviders from "./context/query-provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryProviders>
          <App />
    </QueryProviders>

  </Provider>
);
