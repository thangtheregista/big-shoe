import "./sidebar.css"
import Categories from "./Categories";
import SupportBox from "./SupportBox";
import ProductBox from "./ProductBox";

export default function Sidebar({}) {
    return(
        <aside className="sidebar">
            <Categories

            />
            <SupportBox/>
            <ProductBox/>
        </aside>
    )
}