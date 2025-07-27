import {FaGear, FaMagnifyingGlassPlus} from "react-icons/fa6";
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

export default function HighlightedProduct({handleShowModal}) {
    const [products, setProducts] = useState([])
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://685bfac189952852c2dbbe40.mockapi.io/products?is_featured=true")
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    return(
        <div className="product-section">
            <div className="section-header">
                <span>SẢN PHẨM NỔI BẬT</span>
            </div>

            <div className="product-list">
                {products.slice(0,12).map(product=> (
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