import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer_main')}>
                <div className={cx('footer_front')}>
                    <div className={cx('footer_support')}>
                        <h4>Hỗ trợ - Dịch vụ</h4>
                        <ul>
                            <li>
                                <a href="/">Mua hàng trả góp</a>
                            </li>
                            <li>
                                <a href="/">Hướng dẫn đặt hàng và thanh toán</a>
                            </li>
                            <li>
                                <a href="/">Tra cứu đơn hàng</a>
                            </li>
                            <li>
                                <a href="/">Chính sách bảo hành</a>
                            </li>
                            <li>
                                <a href="/">Phạm vi, điều khoản gói bảo hành mở rộng</a>
                            </li>
                            <li>
                                <a href="/">Chính sách bảo mật</a>
                            </li>
                            <li>
                                <a href="/">Chính sách giải quyết khiếu nại</a>
                            </li>
                            <li>
                                <a href="/">Điều khoản mua bán hàng hóa</a>
                            </li>
                            <li>
                                <a href="/">Câu hỏi thường gặp</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer_support')}>
                        <h4>Thông Tin - Liên Hệ</h4>
                        <ul>
                            <li>
                                <a href="/">Bán hàng Online</a>
                            </li>
                            <li>
                                <a href="/">Chăm sóc Khách hàng</a>
                            </li>
                            <li>
                                <a href="/">Hỗ trợ Kỹ thuật</a>
                            </li>
                            <li>
                                <a href="/">Hỗ trợ Bảo hành & Sửa chữa</a>
                            </li>
                            <li>
                                <a href="/">Liên hệ khối văn phòng</a>
                            </li>
                            <li>
                                <a href="/">Trung tâm bảo hành</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer_support', 'free')}>
                        <h4>Tổng đài hỗ trợ miễn phí</h4>
                        <ul>
                            <li>
                                <a className={cx('sdt')} href="/">
                                    0865955830
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer_support', 'thanhtoan')}>
                        <h4>Phương thức thanh toán</h4>
                        <ul>
                            <li>
                                <a href="/">
                                    <img src="https://hoanghamobile.com/Content/web/img/logo-visa.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://hoanghamobile.com/Content/web/img/logo-jcb.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://hoanghamobile.com/Content/web/img/logo-atm.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://hoanghamobile.com/Content/web/img/logo-master.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://hoanghamobile.com/Content/web/img/logo-samsungpay.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://hoanghamobile.com/Content/web/img/logo-vnpay.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('footer_support', 'thanhtoan')}>
                        <h4>Kết nối với chúng tôi</h4>
                        <ul>
                            <li>
                                <a href="/">
                                    <img
                                        src="https://image.cellphones.com.vn/44x/media/logo/social/cellphones-zalo.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img
                                        src="https://image.cellphones.com.vn/44x/media/logo/social/cellphones-tiktok.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img
                                        src="https://image.cellphones.com.vn/44x/media/logo/social/cellphones-instagram.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img
                                        src="https://image.cellphones.com.vn/44x/media/logo/social/cellphones-facebook.png"
                                        alt=""
                                    />
                                </a>
                            </li>

                            <li>
                                <a href="/">
                                    <img
                                        src="https://image.cellphones.com.vn/44x/media/logo/social/cellphones-youtube.png"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx('footer_bottom')}>
                    <p>2023. Học viện công nghệ Bưu chính Viễn thông</p>
                    <p>Trụ sở chính: 122 Hoàng Quốc Việt, Quận Cầu Giấy, Hà Nội </p>
                    <p>Cơ sở đào tạo tại Hà Nội: Km10, Đường Nguyễn Trãi, Quận Hà Đông, Hà Nội</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
