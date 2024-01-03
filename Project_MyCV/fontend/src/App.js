import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';


import { pulicRouter, privateRouters } from "./routers";
import { DefaultLayout, DefaultLayoutAdmin } from "./layouts";

function App() {
  const token = localStorage.getItem("accessToken");

  return (
    <Router>
      <div className="App">
        <Routes>
          {pulicRouter.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.Layout) {
              Layout = route.Layout;
            } else if (route.Layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
            );
          })}
          {privateRouters.map((route, index) => {
            if (token === null && route.authRequired === undefined) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<Navigate to="/login" replace />}
                />
              );
            }else{
              let Layout = DefaultLayoutAdmin;
              if (route.Layout) {
                Layout = route.Layout;
              } else if (route.Layout === null) {
                Layout = Fragment;
              }

              const Page = route.component;
              return (
                <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
              );
            }
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
