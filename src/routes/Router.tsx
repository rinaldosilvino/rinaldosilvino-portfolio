import { AboutMe } from "@/pages/aboutMe";
import { Home } from "@/pages/home";
import { MyProjects} from "@/pages/myProjects";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

export const RoutesMain = (): JSX.Element => {
    const location = useLocation()

    return (
        <Routes key={location.pathname} location={location}>
            <Route path="/home" element={<Home />}/>
            <Route path="/aboutme" element={<AboutMe />}/>
            <Route path="/myprojects" element={<MyProjects />}/>
            <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
    )
}