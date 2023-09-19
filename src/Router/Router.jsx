import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../Top";
import { App } from "../App";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/quiz" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
