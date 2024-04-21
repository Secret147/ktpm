import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import SliderComponent from '~/components/SliderComponent/SliderComponent';
import Item from '~/components/Item/Item';
import { useEffect, useState } from 'react';
import Taskbar from '~/components/Taskbar/Taskbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [check, setCheck] = useState(true);

    const fetchData = () => {
        fetch(`http://localhost:8000/api/books/`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
                localStorage.setItem('type', 'book');
            });
    };
    const next = (id) => {
        window.location.href = `/detail`;
        localStorage.setItem('productId', id);
    };
    const handleClick = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    return (
        <div className={cx('wrapper')}>
            <Taskbar
                setProducts={setProducts}
                onClick={() => {
                    setCheck(false);
                }}
            ></Taskbar>
            <div className={cx('slider')}>
                <SliderComponent
                    arrImg={[
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/11/tv-xiaomi-thang-7-01.jpg',
                        'https://lzd-img-global.slatic.net/us/domino/02c2182e3b4636d080c4ff9c9348737a.jpg_2200x2200q80.jpg_.webp',
                        'https://lzd-img-global.slatic.net/us/domino/5be54b34797cb70173e173f9b9aa92fe.jpg_2200x2200q80.jpg_.webp',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2024/04/09/redminote13-03.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/19/iphone-14-pro-max-01.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/23/1200x375.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/24/untitled-1-01-1.png',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/06/06/tv-01.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/13/c32-banner-1.jpg',
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2023/07/10/tai-nghe-sennheiser-01.jpg',
                    ]}
                />
            </div>
            <div className={cx('item')}>
                <div className={cx('item_main')}>
                    {products.map((product) => {
                        return (
                            <Item
                                key={product.id}
                                name={product.name}
                                img={product.image}
                                memory={product.title}
                                onClick={() => next(product.id)}
                            ></Item>
                        );
                    })}
                </div>
            </div>

            <div className={cx('back')} onClick={() => handleClick()}>
                <FontAwesomeIcon icon={faArrowUp} />
            </div>
        </div>
    );
}
export default Home;
