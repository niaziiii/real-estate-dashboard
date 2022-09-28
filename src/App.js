import { Routes, Route } from "react-router-dom";
import { Home, Login, New, Single, List } from "./pages/pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="requests" element={<List type={'product'}/>} />

          <Route path="property">
            <Route index element={<List type={'property'} />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>

        </Route>
      </Routes>
    </div>
  );

}


export default App;
