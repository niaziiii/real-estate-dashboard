import { Routes, Route } from "react-router-dom";
import { Home, Login, New, Single, List } from "./pages/pages";
import './style.scss'
import { AppContexts } from './contexts/AppContext'
import { useState } from "react";

function App() {
  const [background, setBackground] = useState(false);
  return (
    <div className={background ? 'app-dark' : "app"}>
      <AppContexts.Provider value={{ setBackground }}>
        <Routes>
          <Route path="/">
            
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="requests" element={<List type={'product'} />} />

            <Route path="property">
              <Route index element={<List type={'property'} />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

          </Route>
        </Routes>
      </AppContexts.Provider>
    </div>
  );

}


export default App;
