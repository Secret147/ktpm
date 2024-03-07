import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { faCheck, faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function CartItem({ img, name, memory, price, onClick, productId }) {
    const [book, setBook] = useState([]);
    const getProduct = (productId) => {
        fetch(`http://127.0.0.1:8000/api/books/${productId}`)
            .then((res) => res.json())
            .then((res) => {
                setBook(res);
            });
    };
    useEffect(() => {
        getProduct(productId);
    }, [productId]);
    const up = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8080/cart/up/${productId}`, fetchOptions);
        if (response) {
            window.location.reload();
            localStorage.setItem('scrollPosition', window.scrollY);
        } else {
            alert('fail');
        }
    };

    useEffect(() => {
        // Khôi phục vị trí cuộn từ LocalStorage sau khi trang được tải lại
        const savedScrollPosition = localStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition));
        }
    }, []);
    const down = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8080/cart/down/${productId}`, fetchOptions);
        if (response) {
            window.location.reload();
            localStorage.setItem('scrollPosition', window.scrollY);
        } else {
            alert('fail');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main_item')}>
                <div className={cx('cancel')} onClick={onClick}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('left_item')}>
                    <div className={cx('main')}>
                        <div className={cx('img')}>
                            <img src={book.image} alt="anh"></img>
                        </div>
                        <div className={cx('name')}>
                            <span className={cx('label')}>{book.name}</span>
                            <span className={cx('memory')}>- {book.title}</span>
                            <div className={cx('price')}>
                                <p>Năm phát hành: {book.year}</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('count_main')}>
                        <div>
                            <p className={cx('count_header')}>Số lượng</p>
                        </div>
                        <div className={cx('count')}>
                            <div className={cx('count_left')} onClick={() => down()}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </div>
                            <div className={cx('count_center')}>
                                <p>{price}</p>
                            </div>

                            <div className={cx('count_right')} onClick={() => up()}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('right_main')}>
                        <div className={cx('right_item')}>
                            <div className={cx('bottom')}>
                                <p>{book.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartItem;
