import { faComments, faHouseUser, faMobileScreen, faReceipt } from '@fortawesome/free-solid-svg-icons';
import styles from './TaskbarAd.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const cx = classNames.bind(styles);
function TaskbarAd() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('task_main')}>
                <div className={cx('header')}>
                    <div className={cx('img')}>
                        <img
                            src="https://i.pinimg.com/236x/54/4d/28/544d28f895914b1e31c9fadc79d0cd5f.jpg"
                            alt="admin"
                        ></img>
                    </div>
                    <div className={cx('name')}>
                        <p>{Cookies.get('user')}</p>
                    </div>
                </div>
                <div className={cx('container')}>
                    <div className={cx('container_main')}>
                        <Link to={'/admin'}>
                            <div className={cx('container_item')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faHouseUser} />
                                </div>
                                <p>Quản lý tài khoản</p>
                            </div>
                        </Link>
                        <Link to={'/product'}>
                            <div className={cx('container_item')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faMobileScreen} />
                                </div>
                                <p>Quản lý sản phẩm</p>
                            </div>
                        </Link>
                        <Link to={'/bill'}>
                            <div className={cx('container_item')}>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faReceipt} />
                                </div>
                                <p>Quản lý hóa đơn</p>
                            </div>
                        </Link>

                        <div className={cx('container_item')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faComments} />
                            </div>
                            <p>Feedback</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TaskbarAd;
