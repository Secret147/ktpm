import Task from '~/components/Tasks/Task';
import {
    faBook,
    faClock,
    faHeadphones,
    faLaptop,
    faMobile,
    faShirt,
    faTablet,
    faTv,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Taskbar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Taskbar({ setProducts, onClick }) {
    const fetchProduct = (type) => {
        fetch(`${type}`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('task')} onClick={onClick}>
                <Task
                    icon={faBook}
                    name="Sách"
                    onClick={() => {
                        fetchProduct('http://localhost:8000/api/books/');
                        localStorage.setItem('type', 'book');
                    }}
                />
                <Task
                    icon={faMobile}
                    name="Điện thoại"
                    onClick={() => {
                        fetchProduct('http://localhost:8000/api/mobiles/');
                        localStorage.setItem('type', 'mobile');
                    }}
                />
                <Task
                    icon={faShirt}
                    name="Quần áo"
                    onClick={() => {
                        fetchProduct('http://localhost:8000/api/clothes/');
                        localStorage.setItem('type', 'clothes');
                    }}
                />
            </div>
        </div>
    );
}
export default Taskbar;
