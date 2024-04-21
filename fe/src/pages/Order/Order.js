import { useEffect, useState } from 'react';
import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import OrderItem from '~/components/OrderItem/OrderItem';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);
function Order() {
    const [checkOrder, setCheckorder] = useState(true);
    const [bills, setBills] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/orders/user/${Cookies.get('userId')}`)
            .then((res) => res.json())
            .then((res) => {
                setBills(res);
            });
    }, []);

    useEffect(() => {
        if (bills.length > 0) {
            setCheckorder(true);
        } else {
            setCheckorder(false);
        }
    }, [bills]);
    const deleteBill = async (billId) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8000/api/orders/${billId}`, fetchOptions);
        if (response.ok) {
            window.location.reload();
        } else {
            alert('fail');
        }
    };
    // const formatNumber = (number) => {
    //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // };
    return (
        <>
            {checkOrder ? (
                <div className={cx('wrapper')}>
                    <div className={cx('main')}>
                        {bills.map((bill) => {
                            return (
                                <div className={cx('order_item')} key={bill.id}>
                                    <div className={cx('order_item_main')}>
                                        <div className={cx('item_header')}>
                                            <p>Hóa đơn {bill.id} </p>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Thông tin khách hàng</span>
                                                    <p>Họ và tên: {bill.name} </p>
                                                    <p>Số điện thoại: {bill.numberphone}</p>
                                                    <p>Email: {bill.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Phương thức nhận hàng</span>
                                                    <p>Nhận hàng: {bill.method}</p>
                                                    <p>Địa chỉ nhận hàng: {bill.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Ghi chú</span>
                                                    <p>{bill.note}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('item_container')}>
                                            <div className={cx('container_main')}>
                                                <div className={cx('infor')}>
                                                    <span>Danh sách sản phẩm</span>
                                                    <div className={cx('list_product')}>
                                                        <OrderItem billId={bill.id}></OrderItem>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('footer_price')} onClick={() => deleteBill(bill.id)}>
                                            <div className={cx('footer_button')}>
                                                <Button primary large>
                                                    Hủy đơn hàng
                                                </Button>
                                            </div>
                                            <div className={cx('footer_main')}>
                                                <div className={cx('footer_header')}>
                                                    {/* <span>Tổng thanh toán</span> */}
                                                    {/* <p className={cx('totalprice')}>
                                                        {formatNumber(bill.totalprice)} đ
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <div className={cx('null_product')}>
                    <div className={cx('null_main')}>
                        <img src="https://hoanghamobile.com/Content/web/content-icon/no-item.png" alt="no_item"></img>
                        <p>Hiện chưa có hóa đơn nào</p>
                    </div>
                </div>
            )}
        </>
    );
}
export default Order;
