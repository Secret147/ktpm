import { useEffect, useState } from 'react';
import styles from './Quantity.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Quantity({ billId, productId }) {
    const [quantitys, setQuantitys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/billdetail/quantity/${productId}/${billId}`)
            .then((res) => res.json())
            .then((res) => {
                setQuantitys(res);
            });
    }, [billId, productId]);
    return (
        <>
            <div className={cx('quantity')}>
                <p>Số lượng: {quantitys}</p>
            </div>
        </>
    );
}
export default Quantity;
