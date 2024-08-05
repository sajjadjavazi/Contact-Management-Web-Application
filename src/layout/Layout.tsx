import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ReactNode } from "react";

type Props = {
    children? : ReactNode
}

const Layout = ({ children } : Props) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;