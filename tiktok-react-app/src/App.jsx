import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import DeafaultLayout from "./components/Layout/index.jsx";
import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import LoginForm from "./components/Login/LoginForm.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            {/* duyệt qua từng phần tử của "./Routes" và lấy path và component */}

            {routes.map((route, index) => {
              // tạo biến là Page để có thể lấy componet được đặt mặc định trong file "./Routes"
              const Page = route.component;

              let Layout = DeafaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              // nếu không có layout thì mặc định sẽ lấy DeafaultLayOut
              // còn nếu có sẽ lấy là Fragment là một thẻ ko chứa gì hết nhưng vẫn hiện nội dung khác với thẻ "<> </>"
              // const Layout = route.layout === null ? Fragment: DeafaultLayout;

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout onLogout={handleLogout}>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
