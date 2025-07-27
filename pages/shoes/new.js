import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Carousels from "../../components/Carousels";
import slides from "../mock.json";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar";
import {useEffect, useState} from "react";
import axios from "axios";
import FilteredProducts from "../../components/Main/FilteredProducts";
import ProductModal from "../../components/Modal/ProductModal";

export default function New() {
    const [product, setProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showModal, setShowModal] = useState(false)

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://685bfac189952852c2dbbe40.mockapi.io/products")
            setFilteredProducts(response.data.filter(p => p.is_new === true))
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProducts()

    }, []);

    const handleShowModal = async (id) => {
        try {
            const response = await axios.get(`https://685bfac189952852c2dbbe40.mockapi.io/products/${id}`)
            setProduct(response.data)
            setShowModal(true)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Layout>
            <Header/>
            <Navbar />
            <Carousels slides={slides}/>
            <Sidebar

            />
            <Main

            >
                <FilteredProducts
                    filteredProducts={filteredProducts}
                    handleShowModal={handleShowModal}
                    title="SẢN PHẨM MỚI"
                />
                {showModal && (
                    <ProductModal product={product} setShowModal={setShowModal}/>
                )}
            </Main>
            <div className="footer">
                footer
            </div>
        </Layout>
    )
}