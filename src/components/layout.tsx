import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </>
    );
}
