import Taskbar from '~/components/Taskbar/Taskbar';
import styles from './Detail.module.scss';
import classNames from 'classnames/bind';

import SliderComponent from '~/components/SliderComponent/SliderComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCheck, faTruckFast, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);
function Detail() {
    const id = localStorage.getItem('productId');
    const [product, setProduct] = useState([]);
    const [dataInput, setDataInput] = useState();

    useEffect(() => {
        const type = localStorage.getItem('type');
        if (type === 'mobile') {
            fetch(`http://localhost:8000/api/mobiles/${id}`)
                .then((res) => res.json())
                .then((res) => {
                    setProduct(res);
                });
        } else if (type === 'clothes') {
            fetch(`http://localhost:8000/api/clothes/${id}`)
                .then((res) => res.json())
                .then((res) => {
                    setProduct(res);
                });
        } else {
            fetch(`http://localhost:8000/api/books/${id}`)
                .then((res) => res.json())
                .then((res) => {
                    setProduct(res);
                });
        }
    }, []);

    const addToCart = async (id) => {
        if (Cookies.get('userId')) {
            const type = localStorage.getItem('type');
            let dataD;

            if (type === 'mobile') {
                dataD = {
                    total: 1,
                    mobile_id: id,
                    order: null,
                    customer_id: Cookies.get('userId'),
                };
            } else if (type === 'clothes') {
                dataD = {
                    total: 1,
                    clothes_id: id,
                    order: null,
                    customer_id: Cookies.get('userId'),
                };
            } else {
                dataD = {
                    total: 1,
                    book_id: id,
                    customer_id: Cookies.get('userId'),
                    order: null,
                };
            }

            const fetchOptions = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(dataD),
            };
            const response = await fetch(`http://127.0.0.1:8000/api/carts/`, fetchOptions);
            if (response.ok) {
                alert('Success');
                window.location.href = 'cart';
            }
        } else {
            alert('Vui lòng đăng nhập');
        }
    };
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const price = product.price ? formatNumber(product.price) : '';

    return (
        <div className={cx('wrapper')}>
            <div className={cx('taskbar')}></div>
            <div className={cx('info_product')}>
                <div className={cx('header')}>
                    <p>{product.name} - </p>
                    {localStorage.getItem('type') === 'mobile' ? <p>{product.type}</p> : <p></p>}
                    {localStorage.getItem('type') === 'clothes' ? <p>{product.style}</p> : <p></p>}
                    {localStorage.getItem('type') === 'book' ? <p>{product.title}</p> : <p></p>}
                </div>
                <div className={cx('container')}>
                    <div className={cx('slider')}>
                        <img src={product.image}></img>
                    </div>
                    <div className={cx('infor')}>
                        <div className={cx('infor_main')}>
                            <div className={cx('button')}>
                                <div
                                    className={cx('buynow')}
                                    onClick={() => {
                                        localStorage.setItem('productOrder', product.id);
                                        window.location.href = '/formorder';
                                    }}
                                >
                                    <p>Mua ngay</p>
                                    <p>Giao tận nhà(COD)</p>
                                    <p>Hoặc nhận tại cửa hàng</p>
                                </div>
                                <div className={cx('buynow', 'tragop')}>
                                    <p>Trả góp</p>
                                    <p>Công ty Tài chính</p>
                                    <p>Hoặc 0% qua thẻ tín dụng</p>
                                </div>
                                <div
                                    className={cx('addcart')}
                                    onClick={() => {
                                        addToCart(product.id);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCartPlus} />
                                    <p>Thêm vào giỏ hàng</p>
                                </div>
                            </div>
                            <div className={cx('guaranty')}>
                                <div className={cx('description')}>
                                    <div className={cx('description_header')}>
                                        <p>Mô tả</p>
                                    </div>
                                    <div className={cx('description_container')}>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('guaranty')}>
                                <div className={cx('guaranty_header')}>
                                    <p>ƯU ĐÃI ĐI KÈM</p>
                                </div>
                                <div className={cx('guaranty_main')}>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>
                                            Từ ngày 01/07-31/07: Mua Tai nghe không dây Redmi Buds 4 Lite với giá chỉ
                                            còn: 550.000đ khi mua kèm với các sản phẩm Điện thoại, Tablet Xiaomi .
                                        </p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>
                                            Giảm thêm tới 1.000.000đ khi tham gia Thu cũ - Lên đời điện thoại Android và
                                            tất cả máy tính bảng
                                        </p>
                                    </div>
                                    <div className={cx('guaranty_item')}>
                                        <FontAwesomeIcon icon={faCheck} />
                                        <p>
                                            Giảm thêm 200.000đ cho tất các sản phẩm màn hình khi mua kèm laptop,
                                            MacBook, máy tính bảng và điện thoại.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('guaranty')}>
                            <div className={cx('guaranty_header')}>
                                <p>Thông tin bảo hành</p>
                            </div>
                            <div className={cx('guaranty_main')}>
                                <div className={cx('guaranty_item')}>
                                    <FontAwesomeIcon icon={faUserShield} />
                                    <p>Bảo hành 18 tháng chính hãng.</p>
                                </div>
                                <div className={cx('guaranty_item')}>
                                    <FontAwesomeIcon icon={faUserShield} />
                                    <p>1 đổi 1 trong 30 ngày đầu nếu có lỗi phần cứng do nhà sản xuất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Detail;
