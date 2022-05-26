import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Checkout />
                            </>
                        }
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
