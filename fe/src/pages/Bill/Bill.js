import styles from './Bill.module.scss';
import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';
import Button from '~/components/Button/Button';
import OrderItem from '~/components/OrderItem';

const cx = classNames.bind(styles);

function Bill() {
    const [bills, setBills] = useState([]);
    const [checkEdit, setCheckEdit] = useState(false);
    const [bill, setBill] = useState([]);
    const getAll = () => {
        fetch('http://localhost:8003/api/orders/')
            .then((res) => res.json())
            .then((res) => {
                setBills(res);
            });
    };

    useEffect(() => {
        getAll();
    }, []);
    const openBill = (id) => {
        setCheckEdit(true);
        fetch(`http://localhost:8003/api/orders/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setBill(res);
            });
    };
    const closeBill = () => {
        setCheckEdit(false);
    };
    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const price = bill.totalprice ? formatNumber(bill.totalprice) : '';
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('header')}>
                    <div className={cx('header_main')}>
                        <p>Quản lý hóa đơn</p>
                    </div>
                    {checkEdit ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <p>Khách hàng: {bill.name}</p>
                                <p>Email: {bill.email}</p>
                                <p>Địa chỉ nhận hàng: {bill.address} </p>
                                <p>Số điện thoại khách hàng: {bill.numberphone} </p>
                                <p>Phương thức nhận hàng: {bill.method} </p>
                                {/* <p>Hóa đơn: {bill.bill} </p> */}
                                <p>Ngày tạo: {bill.created_at} </p>
                                <p>Ghi chú: {bill.note} </p>
                                <p>Danh sách sản phẩm:</p>
                                <div className={cx('list_product')}>
                                    <OrderItem billId={bill.id}></OrderItem>
                                </div>
                            </div>

                            <div className={cx('button')}>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={closeBill}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                {/* -------------------------------------container-------------------------------------------- */}
                <div className={cx('container')}>
                    <div className={cx('container_main')}>
                        <div className={cx('main_item')}>
                            {bills.map((bill) => {
                                return (
                                    <div className={cx('item_main')} key={bill.id}>
                                        <div className={cx('bill_item')}>
                                            <p>ID hóa đơn: {bill.id}</p>
                                        </div>
                                        <div className={cx('bill_item2')}>
                                            <p>Ngày tạo: {bill.created_at}</p>
                                        </div>
                                        <div className={cx('bill_item3')}>
                                            <p>Khách hàng: {bill.name} </p>
                                        </div>
                                        <div className={cx('button')}>
                                            <Button primary large onClick={() => openBill(bill.id)}>
                                                Xem chi tiết hóa đơn
                                            </Button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Bill;
