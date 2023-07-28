import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Paintings from "./pages/Paintings";
import BuyPainting from "./pages/BuyPainting";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Paintings />} />

            <Route
                path="/paintings"
                element={<Navigate to="/" replace />}
            />

            <Route path="/paintings/:docId" element={<BuyPainting />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </>
  );
}

export default App;
