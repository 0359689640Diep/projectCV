import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pdfjs } from 'react-pdf';

import { pulicRouter, privateRouters } from "./routers";
import { DefaultLayout, DefaultLayoutAdmin } from "./layouts";


// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
    </Router>
  );
}

export default App;
