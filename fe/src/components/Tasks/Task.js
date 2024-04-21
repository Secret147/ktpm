import styles from './Task.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);
function Task({ icon, name, onClick }) {
    const [highlighted, setHighlighted] = useState(false);
    const divRef = useRef();
    const handleClick = () => {
        setHighlighted(true); // Thay đổi trạng thái highlighted
        // Gọi hàm onClick nếu được truyền vào từ component cha
        if (onClick) {
            onClick();
        }
    };
    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setHighlighted(false);
        }
    };

    useEffect(() => {
        // Đăng ký sự kiện click ra ngoài khi component được mount
        document.addEventListener('mousedown', handleClickOutside);
        // Hủy đăng ký sự kiện khi component bị unmount để tránh memory leak
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={divRef} className={cx('task_item', { background: highlighted })} onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
            <p>{name}</p>
        </div>
    );
}
export default Task;
