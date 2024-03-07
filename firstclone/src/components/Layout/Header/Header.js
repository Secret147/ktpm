import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import SearchItem from '~/components/SearchItem/SearchItem';

const cx = classNames.bind(styles);
function debounce(func, delay) {
    let timerId;
    function debounced(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
    debounced.cancel = () => {
        clearTimeout(timerId);
    };
    return debounced;
}
function Header() {
    const [checkuser, setCheckuser] = useState(false);

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState('');
    const [checkProduct, setCheckproduct] = useState(false);
    const searchRef = useRef(null);
    const [role, setRole] = useState(true);

    const [checkLog, setCheckLog] = useState(false);
    useEffect(() => {
        if (!Cookies.get('user')) {
            setCheckuser(true);
        }
    }, []);
    useEffect(() => {
        if (Cookies.get('role') > 0) {
            setRole(true);
        } else {
            setRole(false);
        }
    }, []);
    useEffect(() => {
        if (Cookies.get('user')) {
            fetch(`http://localhost:8080/size/${Cookies.get('user')}`)
                .then((res) => res.json())
                .then((res) => {
                    setCount(res);
                });
        } else {
            setCount(0);
        }
    }, []);
    useEffect(() => {
        // Gọi API tìm kiếm khi input thay đổi, áp dụng debounce 500ms
        const searchDebounced = debounce((searchText) => {
            fetch(`http://127.0.0.1:8000/api/books/search/?keywords=${searchText}+/`)
                .then((res) => res.json())
                .then((res) => {
                    setProducts(res);
                })
                .catch((error) => {
                    // Xử lý lỗi nếu cần
                });
        }, 200);

        searchDebounced(input);

        // Clean up khi component unmount
        return () => {
            searchDebounced.cancel(); // Nếu bạn triển khai debounce theo cách cho phép hủy bỏ timeout
        };
    }, [input]);
    useEffect(() => {
        if (products.length > 0) {
            setCheckproduct(true);
        } else {
            setCheckproduct(false);
        }
    }, [products]);
    const next = (id) => {
        window.location.href = `/cart`;
        // localStorage.setItem('productId', id);
    };

    const logout = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify('logout'),
        };
        const response = await fetch('http://localhost:8080/customer/logout', fetchOptions);
        if (response.ok) {
            Cookies.remove('user');
            Cookies.remove('role');
            setCheckuser(false);
            window.location.href = '/';
        }
    };
    const handleChange = (event) => {
        setInput(event.target.value);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Kiểm tra xem sự kiện click có xảy ra bên ngoài phạm vi thẻ div có class là 'search' hay không
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setCheckproduct(false);
            }
        };

        // Thêm event listener cho sự kiện click toàn cục
        document.addEventListener('click', handleOutsideClick);

        return () => {
            // Làm sạch event listener khi component unmount
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const checkLogout = () => {
        setCheckLog(true);
    };
    const checkLeave = () => {
        setCheckLog(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('logo')}>
                    <a href="/" className={cx('icon_home')}>
                        <img
                            src="https://th.bing.com/th/id/OIP.zQ6JBNq1BRyk_nSBt8YI-QHaHx?rs=1&pid=ImgDetMain"
                            alt="no img"
                        ></img>
                    </a>
                </div>
                <div className={cx('search')} ref={searchRef}>
                    <div className={cx('search_main')}>
                        <div className={cx('input_header')}>
                            <input type="text" placeholder="Search" onChange={handleChange}></input>
                        </div>
                        <div className={cx('search_btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    {checkProduct ? (
                        <div className={cx('listproduct')}>
                            <div className={cx('listproduct_main')}>
                                {products.map((product) => {
                                    return (
                                        <SearchItem
                                            product={product}
                                            key={product.id}
                                            onClick={() => next(product.id)}
                                        ></SearchItem>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className={cx('icon')}>
                    <div className={cx('cart')}>
                        <a href={'/cart'} className={cx('icon_header')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                        <div className={cx('number')}>
                            <span>{count}</span>
                        </div>
                    </div>
                    <div className={cx('truck')}>
                        <Link to={'/order'} className={cx('icon_header')}>
                            <FontAwesomeIcon icon={faTruck} />
                        </Link>
                    </div>
                </div>
                {/* {checkuser ? (
                    <div className={cx('btn_header')}>
                        <div className={cx('btn_main')}>
                            <Button normal small href="/login">
                                Login
                            </Button>
                            <Button primary small href="/register">
                                Register
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={cx('user')}>
                        <div className={cx('user_main')} onClick={() => checkLogout()}>
                            <div className={cx('user_icon')}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div>
                                <label>{Cookies.get('user')}</label>
                            </div>
                        </div>
                        {checkLog ? (
                            <div
                                className={cx('logout')}
                                onMouseEnter={() => checkLogout()}
                                onMouseLeave={() => checkLeave()}
                            >
                                <div className={cx('logout_main')}>
                                    {role ? (
                                        <div
                                            className={cx('logout_item')}
                                            onClick={() => {
                                                window.location.href = '/admin';
                                            }}
                                        >
                                            <p>Admin</p>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    <div className={cx('logout_item')}>
                                        <p>Hồ sơ</p>
                                    </div>
                                    <div className={cx('logout_item')}>
                                        <p>Thông tin cá nhân</p>
                                    </div>
                                    <div className={cx('logout_item')} onClick={() => logout()}>
                                        <p>Đăng xuất</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                )} */}
            </div>
        </div>
    );
}
export default Header;
