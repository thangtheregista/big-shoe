import "./index.css";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import slides from "./mock.json";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";

import {useEffect, useState} from "react"
import axios from "axios";
import ProductSection from "../components/Main/ProductSection";
import HighlightedProduct from "../components/Main/HighlightedProduct";
import ProductModal from "../components/Modal/ProductModal";
import Footer from "../components/Footer";


export default function Homepage() {
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([])

    const [showModal, setShowModal] = useState(false)


    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://685bfac189952852c2dbbe40.mockapi.io/products")
            setProducts(response.data)
            localStorage.setItem("products", JSON.stringify(response.data))
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
                        <ProductSection handleShowModal={handleShowModal}/>
                        <HighlightedProduct handleShowModal={handleShowModal}/>
                        {showModal && (
                            <ProductModal product={product} setShowModal={setShowModal}/>
                        )}

                </Main>
                <Footer/>
            </Layout>
    )
}