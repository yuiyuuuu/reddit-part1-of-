import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
