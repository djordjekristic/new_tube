import {BrowserRouter, Route, Routes } from "react-router-dom";
import AllVideos from "./Components/AllVideos";
import Home from "./Pages/Home";
import Video from "./Components/video";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/video/:id" element={<Video />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
