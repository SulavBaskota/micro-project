import { Routes, Route } from "react-router-dom"
import Menu from "./pages/menu/Menu"
import Review from "./pages/menu/Review"
import Home from "./pages/Home"

export default function Body() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu/:id" element={<Menu />} />
            <Route path="/review" element={<Review />} />
        </Routes>
    )
}