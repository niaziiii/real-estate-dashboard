import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, New, Single, List } from "./pages/pages";
import './style.scss'
import { AppContexts } from './contexts/AppContext'
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ name: '' });
  const [background, setBackground] = useState(false);
  const [isLoggin, setIsLoggin] = useState(false);

  const AuthUser = (prop) => {
    return isLoggin ? prop.children : <Navigate to={'/login'} />
  }


  return (
    <div className={background ? 'app-dark' : "app"}>
      <AppContexts.Provider value={{ setBackground, setUser, user, setIsLoggin }}>
        <Routes>
          <Route path="/">

            <Route index element={
              <AuthUser>
                <Home />
              </AuthUser>
            } />
            <Route path="login" element={<Login />} />
            <Route path="requests" element={
              <AuthUser>
                <List type={'product'} />
              </AuthUser>
            } />

            <Route path="property">
              <Route index element={
                <AuthUser>
                  <List type={'property'} />
                </AuthUser>
              } />
              <Route path=":userId" element={
                <AuthUser>
                  <Single />
                </AuthUser>
              } />
              <Route path="new" element={
                <AuthUser>
                  <New />
                </AuthUser>
              } />
            </Route>

          </Route>
        </Routes>
      </AppContexts.Provider>
    </div>
  );

}


export default App;
