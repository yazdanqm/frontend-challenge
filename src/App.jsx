import {Route, Routes} from "react-router-dom";
import HomeView from "@/pages/HomeView.jsx";
import AboutView from "@/pages/AboutView.jsx";
import NotFound from "@/pages/NotFound.jsx";
import TestView from "@/pages/test.jsx";
import '@/assets/styles/forms.css'
import ErrorView from "@/pages/ErrorView.jsx";

function App() {
    return (
        <>
            {/* routes */}
            <Routes>
                <Route path="/" t element={<HomeView/>}/>
                <Route path="/about" element={<AboutView/>}/>
                <Route path="/test" element={<TestView/>}/>
                <Route path="/error" element={<ErrorView/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
