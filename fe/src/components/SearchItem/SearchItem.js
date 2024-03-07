import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SearchItem.module.scss';
import classNames from 'classnames/bind';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function SearchItem({ product, onClick }) {
    const addToCart = async (id) => {
        const data = {
            total: 1,
            book_id: id,
            order: null,
            customer: null,
        };
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(`http://127.0.0.1:8000/api/carts/`, fetchOptions);
        if (response.ok) {
            alert('Success');
            window.location.href = 'cart';
        }
    };
    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <div className={cx('main')}>
                <div className={cx('img')}>
                    <img src={product.image} alt="anh"></img>
                </div>
                <div className={cx('right')}>
                    <div className={cx('name')}>
                        <p>{product.name}</p>
                        <p> - {product.title}</p>
                    </div>
                    <div className={cx('price')}>
                        <p>{product.year} </p>
                    </div>
                </div>
                <div className={cx('edit')} onClick={() => addToCart(product.id)}>
                    <p>Add to Cart</p>
                </div>
            </div>
        </div>
    );
}
export default SearchItem;
