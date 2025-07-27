import "./supportbox.css"
export default function SupportBox() {
    return(
        <div className="sidebar-menu">
            <div className="menu-header">

                HỖ TRỢ TRỰC TUYẾN
            </div>
            <div className="support-item">
                <img src="https://img.icons8.com/ios-filled/20/fa314a/phone.png" alt="Phone Icon"/>
                <div>
                    <strong>Tư vấn bán hàng 1</strong><br/>
                    Mrs. Dung: <strong>(04) 3786 8904</strong>
                </div>
            </div>

            <div className="support-item">
                <img src="https://img.icons8.com/ios-filled/20/fa314a/phone.png" alt="Phone Icon"/>
                <div>
                    <strong>Tư vấn bán hàng 2</strong><br/>
                    Mr. Tuấn: <strong>(04) 3786 8904</strong>
                </div>
            </div>

            <div className="support-item">
                <img src="https://img.icons8.com/ios-filled/20/fa314a/new-post.png" alt="Email Icon"/>
                <div>
                    <strong>Email liên hệ</strong><br/>
                    <a href="mailto:support@bizweb.vn">support@bizweb.vn</a>
                </div>
            </div>
        </div>
    )
}