import { APITester } from "./APITester";
import { FrontPage } from "./Components/FrontPage";
import { Header } from "./Components/Header";
import { UseState } from "./Components/UseState";
import { Objects } from "./Components/Objects";
import "./index.css"; 
import logo from "./logo.svg";
import reactLogo from "./react.svg";

import { createElement } from "react";
import { Forms } from "./Components/Forms";
import { ConditionalRendering } from "./Components/ConditionalRendering";
import { Practice } from "./Components/Practice";
 

export function App() {

  return (
    <div>
    {/* <FrontPage/>  */}
    {/* <UseState/> */}
    {/* <Array/> */}
    {/* <Objects/> */}
    {/* <Forms/> */}
    {/* <ConditionalRendering/> */}
    <Practice/>
    </div>
  );
}

