import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import {Outlet} from "react-router-dom"

function Layout()
{
    return (
        <>
            <Header />,
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;