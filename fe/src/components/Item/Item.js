import styles from './Item.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Item({ img, memory, name, price, onClick }) {
    return (
        <div className={cx('wrapper')} onClick={onClick}>
            <div className={cx('main')}>
                <div className={cx('img')}>
                    <img src={img} alt="anh"></img>
                </div>
                <div className={cx('name')}>
                    <span className={cx('label')}>{name}</span>
                    <span className={cx('memory')}>{memory}</span>
                </div>
                <div className={cx('price')}></div>
            </div>
        </div>
    );
}
export default Item;
