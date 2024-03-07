import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './managaHome.module.scss';
import classNames from 'classnames/bind';
import { faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('container')}>
            <div className={cx('back')}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className={cx('main')}>
                <div className={cx('main_container')}>
                    <div className={cx('search')}>
                        <div className={cx('search_main')}>
                            <div className={cx('search_main_container')}>
                                <div className={cx('search_input')}>
                                    <input className={cx('search_input_ip')} placeholder="Tìm kiếm"></input>
                                </div>
                                <div className={cx('search_icon')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item_table')}>
                        <div className={cx('table_label')}>
                            <div className={cx('item_main')}>
                                <div className={cx('item_left')}>
                                    <div className={cx('item_left_main')}>
                                        <p>Khuôn mặt</p>
                                    </div>
                                </div>
                                <div className={cx('item_right')}>
                                    <div className={cx('item_right_delete')}>
                                        <div className={cx('delete_button')}>
                                            <div className={cx('delete_button_main')}>
                                                <p className={cx('delete_button_main_p')}>Xóa nhãn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('item_right_edit')}>
                                        <div className={cx('delete_button')}>
                                            <div className={cx('delete_button_main')}>
                                                <p className={cx('delete_button_main_p')}>Sửa nhãn</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item_main')}>
                                <div className={cx('item_left')}>
                                    <div className={cx('item_left_main')}>
                                        <p>Khuôn mặt</p>
                                    </div>
                                </div>
                                <div className={cx('item_right')}>
                                    <div className={cx('item_right_delete')}>
                                        <div className={cx('delete_button')}>
                                            <div className={cx('delete_button_main')}>
                                                <p className={cx('delete_button_main_p')}>Xóa nhãn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('item_right_edit')}>
                                        <div className={cx('delete_button')}>
                                            <div className={cx('delete_button_main')}>
                                                <p className={cx('delete_button_main_p')}>Sửa nhãn</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item_main')}>
                                <div className={cx('item_left')}>
                                    <div className={cx('item_left_main')}>
                                        <p>Khuôn mặt</p>
                                    </div>
                                </div>
                                <div className={cx('item_right')}>
                                    <div className={cx('item_right_delete')}>
                                        <div className={cx('delete_button')}>
                                            <div className={cx('delete_button_main')}>
                                                <p className={cx('delete_button_main_p')}>Xóa nhãn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('item_right_edit')}>
                                        <div className={cx('delete_button')}>
                                            <div className={cx('delete_button_main')}>
                                                <p className={cx('delete_button_main_p')}>Sửa nhãn</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('item_main')}>
                                <div className={cx('item_left')}>
                                    <div className={cx('item_left_main')}>
                                        <p>Khuôn mặt</p>
                                    </div>
                                </div>
                                <div className={cx('item_right')}>
                                    <div className={cx('item_right_delete')}>
                                        <div className={cx('delete_button')}>
                                            <div className={cx('delete_button_main')}>
                                                <p className={cx('delete_button_main_p')}>Xóa nhãn</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('item_right_edit')}>
                                        <div className={cx('delete_button')}>
                                            <div className={cx('delete_button_main')}>
                                                <p className={cx('delete_button_main_p')}>Sửa nhãn</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('item_add')}>
                <div className={cx('add_button_main')}>
                    <p className={cx('add_button_main_p')}>Thêm nhãn</p>
                </div>
            </div>
        </div>
    );
}

export default Following;
