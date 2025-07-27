import Layout from "../Layout";
import {useEffect, useState} from "react";
import axios from "axios";
import "./filteredProducts.css"
import ProductCard from "../ProductCard/ProductCard";

export default function FilteredProducts({filteredProducts, handleShowModal, title}) {
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
    const [sortOption, setSortOption] = useState("default")
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
            case "priceAsc":
                return a.price - b.price;
            case "priceDesc":
                return b.price - a.price;
            case "nameAsc":
                return a.name.localeCompare(b.name);
            case "nameDesc":
                return b.name.localeCompare(a.name);
            default:
                return 0;
        }
    });

    useEffect(() => {
        console.log(filteredProducts)
    }, [filteredProducts]);
    return(
        <div className="filtered-product-section">
            <div className="filtered-section-header">
                <h2>
                    {title}
                </h2>
                <div className="sort-bar">
                    <label htmlFor="sort">Sắp xếp theo:</label>
                    <select id="sort" value={sortOption} onChange={(e)=> setSortOption(e.target.value)}>
                        <option value="default">Mặc định </option>
                        <option value="priceAsc">Giá tăng dần</option>
                        <option value="priceDesc">Giá giảm dần</option>
                        <option value="nameAsc">Từ A-Z</option>
                        <option value="nameDesc">Từ Z-A</option>

                    </select>
                </div>
            </div>

            <div className="product-grid">
                {sortedProducts.map((product) => (
                    <ProductCard
                        handleShowModal={handleShowModal}
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>
        </div>
    )
}