import {FaGear, FaMagnifyingGlassPlus} from "react-icons/fa6";
import "./productcard.css"
import Link from "next/link";
import {useRouter} from "next/router";

export default function ProductCard({product, handleShowModal}) {
    const USD_TO_VND = 25000;
    const discount_priceVND = product.discount_price * USD_TO_VND;
    const priceVND = product.price * USD_TO_VND;
    const router = useRouter()
    const handleCardClick = () => {
        router.push(`/shoes/${product.id}`);
    }
    const stopPropagation = (e) => {
        e.stopPropagation();
    }
    const discount = Math.ceil(((product.price - product.discount_price) / product.price) * 100);

    return (
        <div className="product-card">
            <div className="discount-badge">-{discount}%</div>
            <div className="image-wrapper">
                <img
                    src={product.images[0]}
                    alt={product.name}/>

                <div className="product-options" onClick={() => handleCardClick()}>
                    <Link href={`/shoes/${product.id}`}>
                        <button><FaGear/> Tùy chọn</button>
                    </Link>
                    <button onClick={(e) => {
                        handleShowModal(product.id)
                        stopPropagation(e);
                    }}><FaMagnifyingGlassPlus/> Xem nhanh
                    </button>
                </div>

            </div>

            <Link href={`/shoes/${product.id}`}><h4>{product.name}</h4></Link>

            <div className="price">
                <span className="new-price">{discount_priceVND.toLocaleString('vi-VN')}đ</span>
                <span className="old-price">{priceVND.toLocaleString('vi-VN')}đ</span>
            </div>

        </div>
    )
}