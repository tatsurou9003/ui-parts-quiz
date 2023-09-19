import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router/Router";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Router />
  </ChakraProvider>
);
