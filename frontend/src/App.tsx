import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"


import Home from "./pages/Home"
import About from "./pages/About"

import Header from "./pages/components/Header"

import "./style/general.css"

function App() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Suspense>
    )
}

export default App
