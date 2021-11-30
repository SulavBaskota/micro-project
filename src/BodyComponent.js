import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginComponent";
import Menu from "./pages/MenuComponent";

export default function Body() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="menu/:id" element={<Menu />} />
        </Routes>
    )
}