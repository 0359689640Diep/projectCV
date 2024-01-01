import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { pulicRouter } from "./routers";
import {DefaultLayout} from "./layouts";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            pulicRouter.map((route, index) => {
              let Layout = DefaultLayout;
              if(route.Layout){
                Layout = route.Layout;
              }else if(route.Layout === null) {
                Layout = Fragment
              }

              const Page = route.component;
              return <Route 
                key={index}
                path={route.path}
                element = {<Layout> <Page/> </Layout>}
               ></Route>
            })
          }
        </Routes>
      </div>
    </Router>

  );
}

export default App;
