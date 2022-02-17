import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

// import reportWebVitals from "./reportWebVitals";

// import ReactDOM from "react-dom";
import React from "react";

import { createStore } from "redux";

import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";

// import Layout from "./components/layout/Layout";

const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <Layout />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById("root")
// );

function App() {
  return (
    <Provider store={store}>
      <Router>
        {" "}
        <Routes></Routes>
      </Router>
    </Provider>
  );
}

// reportWebVitals();

export default App;
