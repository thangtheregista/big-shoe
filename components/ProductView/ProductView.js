import "./productview.css"
import Form from 'react-bootstrap/Form';
import {FaTruck} from "react-icons/fa";
import {useEffect, useState} from "react";
import axios from "axios";

export default function ProductView({id}) {
    const [product, setProduct] = useState([]);


    const [mainImage, setMainImage] = useState([])
    const USD_TO_VND = 25000;
    const discount_priceVND= product.discount_price * USD_TO_VND;
    const priceVND= product.price * USD_TO_VND;
    const [lines, setLines] = useState([])

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://685bfac189952852c2dbbe40.mockapi.io/products/1`)
            setProduct(response.data)
            console.log(response.data)
            setMainImage(response.data.images[0])
            setLines(response.data.description.split("\n"))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProduct()
        console.log(id)
    }, [id]);
    return (
        <div className="product-view">

            <div className="main-section">
                <div className="left">
                    <img className="main-img"
                         src={mainImage}
                         alt="Product"/>

                    <div className="thumbnails">
                        {(product.images || []).map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                onClick={() => setMainImage(image)}
                            />
                        ))}
                    </div>
                </div>

                <div className="center">
                    <h2>{product.name}</h2>
                    <p>Thương hiệu: <span className="highlight">{product.brand}</span> | Loại: <span className="highlight">{product.category}</span>
                    </p>

                    <div className="price">
                        <span className="current">{discount_priceVND.toLocaleString('vi-VN')}đ</span>
                        <span className="old">{priceVND.toLocaleString('vi-VN')}đ</span>
                    </div>

                    <div className="desc">
                        <p><strong>Mô tả:</strong></p>
                        <ul>
                            {lines.map((line, index) => (
                                <li key={index}>{line}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="options">
                        <div className="size">
                            <label>Màu sắc</label>
                            <Form.Select aria-label="Default select example" size="sm">
                                {(product.colors || []).map((color, index) => (
                                    <option key={index} value={color}>{color}</option>
                                ))}
                            </Form.Select>
                        </div>

                        <div className="quantity">
                            <label>Số lượng</label>
                            <div className="quantity-btns">
                                <button>-</button>
                                <input type="text" value="1"/>
                                <button>+</button>
                            </div>
                        </div>

                    </div>

                    <button className="add-to-cart"> THÊM VÀO GIỎ HÀNG</button>

                    <div className="tags">
                        <span className="title">Tags:</span>
                        {(product.tags || []).map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>

                    <div className="share">
                        <span className="title">Chia sẻ:</span>
                        <span>📘</span> <span>🐦</span> <span>🔗</span>
                    </div>
                </div>

                <div className="right">
                    <div className="info-box">
                        <FaTruck/>
                        <p>Miễn phí vận chuyển với đơn hàng lớn hơn 1.000.000 ₫</p></div>
                    <div className="info-box">
                        <FaTruck/>
                        <p>Giao hàng ngay sau khi đặt hàng (áp dụng với Hà Nội & HCM)</p>
                    </div>
                    <div className="info-box">
                        <FaTruck/>
                        <p>Đổi trả trong 3 ngày, thủ tục đơn giản</p>
                    </div>
                    <div className="info-box">
                        <FaTruck/>
                        <p>Nhà cung cấp xuất hóa đơn cho sản phẩm này</p>
                    </div>
                </div>
            </div>
        </div>
    )
}