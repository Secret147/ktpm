import Header from '../components/Header/Header';
import TaskbarAd from '../components/TaskbarAd/TaskbarAd';
import styles from './AdminLayOut.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function AdminLayOut({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <TaskbarAd />
                {children}
            </div>
        </div>
    );
}
export default AdminLayOut;
