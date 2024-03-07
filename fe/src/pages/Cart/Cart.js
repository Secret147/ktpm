import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '~/components/CartItem';
import Header from '~/components/Layout/Header';

const cx = classNames.bind(styles);
function Cart() {
    const [products, setProducts] = useState([]);
    const [totalpay, setTotalpay] = useState(0);
    const [checkItem, setCheckitem] = useState(false);

    const getProduct = () => {
        fetch(`http://localhost:8000/api/carts/`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    };
    const deleteProduct = async (productId) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const deleteAPI = `http://localhost:8000/api/carts/${productId}`;
        const response = await fetch(deleteAPI, fetchOptions);
        if (response.ok) {
            getProduct();
            window.location.reload();
        } else {
            alert('fail');
        }
    };

    // useEffect(() => {
    //     fetch(`http://localhost:8080/cart/totalprice/${Cookies.get('user')}`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setTotalpay(res);
    //         });
    // }, []);

    useEffect(() => {
        getProduct();
    }, [checkItem]);
    useEffect(() => {
        if (products.length > 0) {
            setCheckitem(true);
        } else {
            setCheckitem(false);
        }
    }, [products]);
    // const formatNumber = (number) => {
    //     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // };
    return (
        <>
            {checkItem ? (
                <div>
                    <Header></Header>
                    <div className={cx('wrapper')}>
                        <div className={cx('main')}>
                            {products.map((product) => {
                                return (
                                    <CartItem
                                        key={product.id}
                                        onClick={() => deleteProduct(product.id)}
                                        productId={product.book_id}
                                        price={product.total}
                                    ></CartItem>
                                );
                            })}
                        </div>
                        <div className={cx('pay')}>
                            <div className={cx('pay_main')}>
                                <p>Tổng tiền tạm tính:</p>
                                <span> {totalpay}</span>
                            </div>
                            <div className={cx('paid')}>
                                <Link to={'/formorder'}>
                                    <p>Tiến hành đặt hàng</p>
                                </Link>
                            </div>
                            <div className={cx('paid', 'custom')}>
                                <Link to={'/'}>
                                    <p>Chọn thêm sản phẩm khác</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('null_product')}>
                    <div className={cx('null_main')}>
                        <img src="https://hoanghamobile.com/Content/web/content-icon/no-item.png" alt="no_item"></img>
                        <p>Hiện chưa có sản phẩm trong giỏ hàng</p>
                    </div>
                </div>
            )}
        </>
    );
}
export default Cart;
