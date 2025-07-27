import "./navbar.css"
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar({}) {
    return (
        <nav className="main-nav">
            <div className="main-nav-wrapper">
                <ul className="nav-links">
                    <li  className="active"><a href="#"><FaHome className="home-icon" />TRANG CHỦ</a></li>
                    <li><a href="#">VỀ CHÚNG TÔI</a></li>
                    <li>
                        <a href="#">SẢN PHẨM <span>▼</span></a>
                        <ul className="dropdown">
                            <li><a href="#">Bộ sưu tập mới</a></li>
                            <li>
                                <a href="#">Giày thời trang nam <IoIosArrowForward />
                                </a>
                                <ul className="dropdown-submenu">
                                    <li><a href="#">Giày da</a></li>
                                    <li><a href="#">Giày vải</a></li>
                                    <li><a href="#">Giày Converse</a></li>
                                    <li><a href="#">Giày Vans</a></li>
                                    <li><a href="#">Giày Lacoste</a></li>
                                    <li><a href="#">Giày D&G</a></li>
                                    <li><a href="#">Giày Bata</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Giày thời trang nữ <IoIosArrowForward />
                                </a>
                                <ul className="dropdown-submenu">
                                    <li><a href="#">Giày Converse</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Giày mùa hè</a></li>
                            <li><a href="#">Giày công sở</a></li>
                            <li><a href="#">Giày thể thao</a></li>
                            <li><a href="#">Giày đi chơi</a></li>
                            <li><a href="#">Giày trẻ em</a></li>
                            <li><a href="#">Giày</a></li>

                        </ul>
                    </li>
                    <li>
                        <a href="#">TIN TỨC <span>▼</span></a>
                        <ul className="dropdown">
                            <li><a href="#">Tin tức khuyến mãi</a></li>
                            <li><a href="#">Tin tức giày</a></li>
                            <li><a href="#">Thời trang & cuộc sống</a></li>
                            <li><a href="#">Xu hướng thời trang</a></li>
                            <li><a href="#">Đẹp + giày ...</a></li>
                            <li><a href="#">Tin thương hiệu</a></li>
                            <li><a href="#">Câu hỏi thường gặp</a></li>
                        </ul>
                    </li>
                    <li><a href="#">LIÊN HỆ</a></li>
                </ul>
                <div className="hotline">
                    <img src="https://img.icons8.com/ios-filled/24/ffffff/phone.png" alt="Phone Icon"/>
                    <span>Hotline: 1900 6750</span>
                </div>
            </div>
        </nav>
    )
}