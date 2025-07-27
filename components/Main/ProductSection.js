import "./productsection.css"
import {FaGear} from "react-icons/fa6";
import {FaMagnifyingGlassPlus} from "react-icons/fa6";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";


export default function ProductSection({handleShowModal}) {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://685bfac189952852c2dbbe40.mockapi.io/products?is_new=true")
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <div className="product-section">
            <div className="section-header">
                <span>SẢN PHẨM MỚI</span>
                {/*<div className="nav-arrows">*/}
                {/*    <span>❮</span>*/}
                {/*    <span>❯</span>*/}
                {/*</div>*/}
            </div>

            <div className="product-list">
                {products.slice(0,8).map((product) => (
                    <ProductCard
                        handleShowModal={handleShowModal}
                        key={product.id}
                        product={product}
                    />
                ))}
                {/*<div className="product-card">*/}
                {/*    <div className="discount-badge">-14%</div>*/}
                {/*    <div className="image-wrapper">*/}
                {/*        <img*/}
                {/*            src="https://bizweb.dktcdn.net/thumb/large/100/091/132/products/9-min-0f7e3257-9fa9-4aab-8955-0f7701b42ead.jpg?v=1468202641487"*/}
                {/*            alt="Giày da Converse cao cấp"/>*/}
                {/*        <div className="product-options">*/}
                {/*            <button><FaGear/> Tùy chọn</button>*/}
                {/*            <button><FaMagnifyingGlassPlus/> Xem nhanh</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <h4>Giày da Converse cao cấp</h4>*/}
                {/*    <div className="price">*/}
                {/*        <span className="new-price">1.200.000₫</span>*/}
                {/*        <span className="old-price">1.400.000₫</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>
    )
}