import { useEffect, useState } from 'react';
import styles from './OrderItem.module.scss';
import classNames from 'classnames/bind';
import Quantity from '../Quantity/Quantity';

const cx = classNames.bind(styles);

function OrderItem({ billId }) {
    const [products, setProducts] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/orders/book/${billId}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    }, [billId]);
    useEffect(() => {
        fetch(`http://localhost:8000/api/orders/mobile/${billId}`)
            .then((res) => res.json())
            .then((res) => {
                setMobiles(res);
            });
    }, [billId]);
    useEffect(() => {
        fetch(`http://localhost:8000/api/orders/clothes/${billId}`)
            .then((res) => res.json())
            .then((res) => {
                setClothes(res);
            });
    }, [billId]);
    return (
        <>
            {products.length > 0 ? (
                products.map((product) => {
                    return (
                        <div className={cx('product_item')} key={product.id}>
                            <div className={cx('img')}>
                                <img src={product.image} alt="anh"></img>
                            </div>
                            <div className={cx('name')}>
                                <p className={cx('name_product')}>{product.name}</p>

                                <p> - {product.title}</p>
                            </div>
                            {/* <div className={cx('price')}>
                            <p>{formatNumber(product.price)} đ</p>
                        </div> */}

                            {/* <Quantity billId={billId} productId={product.id} /> */}
                            {/* <div className={cx('quantity')}>
                            <p>Số lượng: {product}</p>
                        </div> */}
                        </div>
                    );
                })
            ) : (
                <div></div>
            )}
            {mobiles.length > 0 ? (
                mobiles.map((product) => {
                    return (
                        <div className={cx('product_item')} key={product.id}>
                            <div className={cx('img')}>
                                <img src={product.image} alt="anh"></img>
                            </div>
                            <div className={cx('name')}>
                                <p className={cx('name_product')}>{product.name}</p>
                                <p> - {product.type}</p>
                            </div>
                            {/* <div className={cx('price')}>
                            <p>{formatNumber(product.price)} đ</p>
                        </div> */}

                            {/* <Quantity billId={billId} productId={product.id} /> */}
                            {/* <div className={cx('quantity')}>
                            <p>Số lượng: {product}</p>
                        </div> */}
                        </div>
                    );
                })
            ) : (
                <div></div>
            )}
            {clothes.length > 0 ? (
                clothes.map((product) => {
                    return (
                        <div className={cx('product_item')} key={product.id}>
                            <div className={cx('img')}>
                                <img src={product.image} alt="anh"></img>
                            </div>
                            <div className={cx('name')}>
                                <p className={cx('name_product')}>{product.name}</p>
                                <p> - {product.style}</p>
                            </div>
                            {/* <div className={cx('price')}>
                            <p>{formatNumber(product.price)} đ</p>
                        </div> */}

                            {/* <Quantity billId={billId} productId={product.id} /> */}
                            {/* <div className={cx('quantity')}>
                            <p>Số lượng: {product}</p>
                        </div> */}
                        </div>
                    );
                })
            ) : (
                <div></div>
            )}
        </>
    );
}
export default OrderItem;
