import "./productitem.css"
import Link from "next/link";
export default function ProductItem({product}) {
    const USD_TO_VND = 25000;
    const discount_priceVND= product.discount_price * USD_TO_VND;
    const priceVND= product.price * USD_TO_VND;
    return (
        <li className="product-item">
            <Link href={`/shoes/${product.id}`}>
                <img src={product.images[0]} alt="Giày da Converse cao cấp"/></Link>
            <div>
                <Link href={`/shoes/${product.id}`}><p>{product.name}</p></Link>

                <div className="price">
                    <span className="new-price">{discount_priceVND.toLocaleString('vi-VN')}đ</span>
                    <span className="old-price">{priceVND.toLocaleString('vi-VN')}đ</span>
                </div>
            </div>
        </li>
    )
}