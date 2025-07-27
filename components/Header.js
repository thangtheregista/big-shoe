import "./header.css"
export default function Header() {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-left">
                    <a href="/"><img src="https://bizweb.dktcdn.net/100/091/132/themes/877468/assets/logo.png?1676015131562" alt="Logo" className="logo"/></a>
                </div>

                <div className="header-center">
                    <div className="search-trending">
                        <span>Xu hướng tìm kiếm</span>
                        <a href="#">converse</a>
                        <a href="#">giày da</a>
                        <a href="#">giày thời trang nam</a>
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Tìm kiếm ..."/>
                        <button>Tìm kiếm</button>
                    </div>
                </div>

                <div className="header-right">
                    <div className="account">
                        <img src="https://img.icons8.com/ios/24/user--v1.png" alt="Account"/>
                        <a href="#">Đăng nhập / Đăng ký</a>
                    </div>
                    <div className="cart">
                        <a href="#"><img src="https://img.icons8.com/ios/24/shopping-cart--v1.png" alt="Cart"/></a>

                        <span className="cart-badge">0</span>
                        <a href="#">Giỏ hàng</a>
                    </div>
                </div>
            </div>

        </header>
    )
}