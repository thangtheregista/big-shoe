import "./productbox.css"
import {useEffect, useState} from "react";
import axios from "axios";
import ProductItem from "./ProductItem/ProductItem";
export default function ProductBox() {
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
        <div className="sidebar-menu">
            <div className="menu-header">

                SẢN PHẨM NỔI BẬT
            </div>
            <ul className="product-box">
                {products.slice(0,4).map((product, index)=> (
                    <ProductItem key={index} product={product}/>
                ))}
                {/*<li className="product-item">*/}
                {/*    <img src="https://bizweb.dktcdn.net/thumb/large/100/091/132/products/9-min-0f7e3257-9fa9-4aab-8955-0f7701b42ead.jpg?v=1468202641487" alt="Giày vải Converse 3"/>*/}
                {/*    <div>*/}
                {/*        <p>Giày vải Converse 3</p>*/}
                {/*        <div className="price">*/}
                {/*            <span className="new-price">700.000₫</span>*/}
                {/*            <span className="old-price">800.000₫</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</li>*/}


            </ul>
        </div>
    )
}