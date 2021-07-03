import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import user from "./user.json";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'))