import React, { Component } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

function App (){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/login" element = {<Login/>} />
      <Route path="/register" element = {<Register/>} />
    </Routes>
    </BrowserRouter>
  )
}


// //  import { Button} from 'antd';

// class App extends Component {
//   render() {
//     return (
//       <div clas="main">
//         <h1 class="head">b-bank</h1>

//       </div>
      

     
//     );
//   }
// }


export default App;
