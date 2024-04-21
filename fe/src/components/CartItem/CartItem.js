import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { faCheck, faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function CartItem({ onClick, total, bookId, mobileId, clothesId }) {
    const [book, setBook] = useState([]);
    const getProduct = () => {
        if (bookId === null && clothesId === null) {
            fetch(`http://127.0.0.1:8000/api/mobiles/${mobileId}`)
                .then((res) => res.json())
                .then((res) => {
                    setBook(res);
                });
        } else if (bookId === null && mobileId === null) {
            fetch(`http://127.0.0.1:8000/api/clothes/${clothesId}`)
                .then((res) => res.json())
                .then((res) => {
                    setBook(res);
                });
        } else {
            fetch(`http://127.0.0.1:8000/api/books/${bookId}`)
                .then((res) => res.json())
                .then((res) => {
                    setBook(res);
                });
        }
    };
    useEffect(() => {
        getProduct();
    }, []);
    const up = async () => {
        // const fetchOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        // };
        // // const response = await fetch(`http://localhost:8080/cart/up/${productId}`, fetchOptions);
        // if (response) {
        //     window.location.reload();
        //     localStorage.setItem('scrollPosition', window.scrollY);
        // } else {
        //     alert('fail');
        // }
    };

    useEffect(() => {
        // Khôi phục vị trí cuộn từ LocalStorage sau khi trang được tải lại
        const savedScrollPosition = localStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition));
        }
    }, []);
    const down = async () => {
        // const fetchOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //     },
        // };
        // const response = await fetch(`http://localhost:8080/cart/down/${productId}`, fetchOptions);
        // if (response) {
        //     window.location.reload();
        //     localStorage.setItem('scrollPosition', window.scrollY);
        // } else {
        //     alert('fail');
        // }
    };
    if (bookId === null && clothesId === null) {
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
                                <span className={cx('memory')}>- {book.type}</span>
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
                                    <p>{total}</p>
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
    } else if (bookId === null && mobileId === null) {
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
                                <span className={cx('memory')}>- {book.style}</span>
                                <div className={cx('price')}>
                                    <p>Năm phát hành: {}</p>
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
                                    <p>{total}</p>
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
    } else {
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
                                    <p>{total}</p>
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
}
export default CartItem;
