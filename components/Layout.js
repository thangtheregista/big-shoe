import "./layout.css"
import Header from "./Header";
import Navbar from "./Navbar";
import Carousels from "./Carousels";
import slides from '../pages/mock.json'
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";


export default function Layout({children}) {
    return(
        <div className="layout">
            {children}
        </div>
    )
}