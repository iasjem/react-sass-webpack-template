import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";

import './index.scss';

const Index = () => {
  return <App />
};

createRoot(document.getElementById("app")).render(<Index />);