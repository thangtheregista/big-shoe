import "./categories.css"
import { IoMdArrowDropright } from "react-icons/io";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";


export default function Categories({ }) {
    const [categories, setCategories] = useState([])
    const [unisexBrands, setUnisexBrands] = useState([])
    const [menBrands, setMenBrands] = useState([])
    const [womenBrands, setWomenBrands] = useState([])
    const categoryMap = {
        "Running": "Giày Chạy bộ",
        "Casual": "Giày Đi chơi",
        "Lifestyle": "Giày Lifestyle",
        "Sneakers": "Giày sneaker",
        "Skate": "Giày Trượt ván",
        "Tennis": "Giày Chơi Quần vợt",
        "Luxury": "Giày Cao cấp",
        "Walking": "Giày Đi bộ",
        "Basketball": "Giày Chơi Bóng rổ"
    };
    const vietnameseCategories = categories.map(cat => categoryMap[cat] || cat);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://685bfac189952852c2dbbe40.mockapi.io/products")
            const categoriesList = [...new Set(response.data.map(product => product.category))]
            setCategories(categoriesList)
            const menProducts = response.data.filter(product => product.gender === "Men")
            const menBrandsList = [...new Set(menProducts.map(product => product.brand))]
            setMenBrands(menBrandsList)
            const womenProducts = response.data.filter(product=> product.gender === "Women")
            const womenBrandsList = [...new Set(womenProducts.map(product => product.brand))]
            setWomenBrands(womenBrandsList)
            const unisexProducts = response.data.filter(product => product.gender === "Unisex")
            const unisexBrandsList = [...new Set(unisexProducts.map(product => product.brand))]
            setUnisexBrands(unisexBrandsList)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCategories()
    }, []);
    return (
        <div className="sidebar-menu">
            <div className="menu-header">
                <span className="menu-icon">☰</span>
                DANH MỤC SẢN PHẨM
            </div>
            <ul className="menu-list">
                <li ><Link href={`/shoes/new`}>Sản phẩm mới</Link></li>
                <li ><Link href={`/shoes/featured`}>Sản phẩm nổi bật</Link></li>
                <li>
                    <a >Giày nam <IoMdArrowDropright /></a>
                    <ul className="dropdown-submenu">
                        {menBrands.map((brand, index) => (
                            <li  key={index}><Link href={`/shoes/category/${brand.toLowerCase().replace(/\s+/g, "-")}`} >{brand}</Link></li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a >Giày nữ <IoMdArrowDropright /></a>
                    <ul className="dropdown-submenu">
                        {womenBrands.map((brand, index)=> (
                            <li key={index}><Link href={`/shoes/category/${brand.toLowerCase().replace(/\s+/g, "-")}`} >{brand}</Link></li>
                        ))}
                    </ul>
                </li>
                <li>
                    <a >Giày unisex <IoMdArrowDropright /></a>
                    <ul className="dropdown-submenu">
                        {unisexBrands.map((brand, index)=> (
                            <li key={index}><Link href={`/shoes/category/${brand.toLowerCase().replace(/\s+/g, "-")}`}>{brand}</Link></li>
                        ))}
                    </ul>
                </li>
                {vietnameseCategories.map((category, index)=> (
                    <li key={index} ><Link href={`/shoes/category/${categories[index].toLowerCase().replace(/\s+/g, "-")}`}>{category}</Link></li>
                ))}

                {/*<li><a href="#" className="more-link">Xem thêm ...</a></li>*/}
            </ul>
        </div>
    )
}