import { BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes></Routes>
        <Routes>
          {/*            <Route path="/product/:productId" element={<ProductDetail/>}/>
           */}{" "}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
