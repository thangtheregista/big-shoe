import {useEffect, useState} from "react";
import axios from "axios";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Carousels from "../../../components/Carousels";
import slides from "../../mock.json";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Main from "../../../components/Main/Main";
import FilteredProducts from "../../../components/Main/FilteredProducts";
import ProductModal from "../../../components/Modal/ProductModal";
import Layout from "../../../components/Layout";
import {useRouter} from "next/router";

export default function CategoryView() {
    const router = useRouter()
    const {category} = router.query
    const [title, setTitle] = useState("")
    const [product, setProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showModal, setShowModal] = useState(false)

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
    const toSlug = (text) =>
        text
            ?.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/\s+/g, "-");
    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://685bfac189952852c2dbbe40.mockapi.io/products");
            const filtered = response.data.filter((product) => {

                const brandSlug = toSlug(product.brand);
                const categorySlug = toSlug(product.category);
                return brandSlug === category || categorySlug === category;
            });

            setFilteredProducts(filtered);
                const isBrand = filtered.every((p) => toSlug(p.brand) === category);
                const label = isBrand ? filtered[0].brand : filtered[0].category;
                setTitle(isBrand ? `Giày ${label}` : `${categoryMap[label]}`);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProducts()

    }, [category]);

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
                    title={title}
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