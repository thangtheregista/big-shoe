import {IoMdCloseCircle} from "react-icons/io";
import "./productmodal.css"
import {useEffect, useState} from "react";
import axios from "axios";

export default function ProductModal({setShowModal, product}) {
    const USD_TO_VND = 25000;
    const discount_priceVND= product.discount_price * USD_TO_VND;
    const priceVND= product.price * USD_TO_VND;
    const [lines, setLines] = useState(product.description.split("\n"))
    const [mainImage, setMainImage] = useState(product.images[0])
    useEffect(() => {

    }, [product.id]);
    return(
        <div className="modal-div" id="quickViewModal">
            <div className="modal-content">
                <IoMdCloseCircle className="close-btn" onClick={() => setShowModal(false)} />

                <div className="modal-body">
                    <div className="modal-left">
                        <img src={mainImage} alt="Converse shoe" className="main-img"/>
                        <div className="thumbnail-row">
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    className="thumb"
                                    onClick={() => setMainImage(image)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="modal-right">
                        <h2>{product.name}</h2>
                        <p>Thương hiệu: <span className="brand">{product.brand}</span> | Loại: {product.category}</p>

                        <div className="price">
                            <span className="current-price">{discount_priceVND.toLocaleString('vi-VN')}đ</span>
                            <span className="old-price">{priceVND.toLocaleString('vi-VN')}đ</span>
                        </div>

                        <div className="desc">
                            <p><strong>Mô tả:</strong></p>
                            <ul>
                                {lines.map((line, index) => (
                                    <li key={index}>{line}</li>
                                ))}
                            </ul>

                        </div>
                        <div className="size"><label htmlFor="color">Màu sắc</label>
                            <select id="color">
                                {product.colors.map((color, index) => (
                                <option key={index} value={color}>{color}</option>
                                ))}
                            </select>
                        </div>


                        <button className="buy-btn">Hết hàng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}