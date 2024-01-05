import {
  BrowserRouter,
  Navigate ,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import Template from "./components/Template";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/aa" element={<Template section="AA" /> } />
        <Route path="/sa" element={<Template section="SA" /> } />
        <Route path="/ad" element={<Template section="AD" /> } />
        <Route path="/nn" element={<Template section="NN" /> } />
        <Route index element={<Navigate to="/sa" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
