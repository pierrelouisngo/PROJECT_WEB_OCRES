import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

  const rootElement = document.getElementById("root");
  ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>

    ,
    rootElement
  );
  


//ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
