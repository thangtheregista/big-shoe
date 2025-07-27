import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Carousels from "../../components/Carousels";
import slides from "../mock.json";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductView from "../../components/ProductView/ProductView";

export default function ShoeDetail() {
    const router = useRouter()
    const {id} = router.query
    // const [product, setProduct] = useState([]);
    //
    // const fetchProduct = async () => {
    //     try {
    //         const response = await axios.get(`https://685bfac189952852c2dbbe40.mockapi.io/products/${id}`)
    //         setProduct(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        // fetchProduct()
    }, [id]);
    return(
        <Layout>
            <Header/>
            <Navbar/>
            <ProductView id={id}/>
            <div className="footer">
                footer
            </div>
        </Layout>
    )
}