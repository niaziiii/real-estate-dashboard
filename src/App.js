import { Routes, Route } from "react-router-dom";
import { Home, Login, New, Single, List } from "./pages/pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

        </Route>
      </Routes>
    </div>
  );

}


export default App;
