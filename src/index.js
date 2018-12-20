import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import ReduxBase from './ReduxBase';

render(
  <ReduxBase>
    <App />
  </ReduxBase>,
  document.getElementById("root")
)
