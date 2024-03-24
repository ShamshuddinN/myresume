import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import RoffCanvas from "./components/RoffCanvas";
import SideNav from "./components/SideNav";
import HomeSideBar from "./components/HomeSideBar";

function App() {
  return (
    <>
      <RoffCanvas />

      <div className="container-fluid ">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-10 p-0 m-0 bg-secondary-subtle homeNav dis-md-none">
            <HomeSideBar />
          </div>

          

        </div>
      </div>
    </>
  );
}

export default App;
