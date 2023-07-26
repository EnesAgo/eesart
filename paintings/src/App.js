import React from "react";
import {Route, Routes} from "react-router-dom";
import Paintings from "./pages/Paintings";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Paintings />} />
        </Routes>
    </>
  );
}

export default App;
