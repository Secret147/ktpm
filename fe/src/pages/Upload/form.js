import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './form.module.scss';

const cx = classNames.bind(styles);

function Form() {
    // Khởi tạo trạng thái cho các trường trong form
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        province: '',
        district: '',
    });
    const hanoi = ['Đống Đa', 'Cầu Giấy', 'Hà Đông'];
    const tphcm = ['Quận 1', 'Quận 2', 'Quận 3'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        if (formData.phone === '') {
            alert('Vui lòng nhập số điện thoại');
        } else if (formData.email === '') {
            alert('Vui lòng nhập email');
        } else if (formData.province === '') {
            alert('Vui lòng chọn tỉnh thành phố');
        } else if (formData.district === '') {
            alert('Vui lòng chọn quận huyện');
        } else {
            alert('Success');
        }
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <div className={cx('container')}>
                <div className={cx('main')}>
                    <h2>Form</h2>
                    <form onSubmit={handleSubmit} className={cx('form-main')}>
                        <div className={cx('form_main_container')}>
                            <label htmlFor="phone">Số điện thoại:</label>
                            <br />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={cx('input')}
                            />
                            <br />

                            <label htmlFor="email">Email:</label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={cx('input')}
                            />

                            <br />

                            <label>Tỉnh / Thành phố:</label>
                            <br />
                            <select
                                id="province"
                                name="province"
                                value={formData.province}
                                onChange={handleInputChange}
                                className={cx('input')}
                            >
                                <option value="">Chọn tỉnh / thành phố</option>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="TP.Hồ Chí Minh">Hồ Chí Minh</option>
                            </select>

                            <br />

                            <label>Quận / Huyện:</label>
                            <select
                                id="district"
                                name="district"
                                value={formData.district}
                                onChange={handleInputChange}
                                className={cx('input')}
                            >
                                <option value="">Chọn quận / huyện</option>

                                {formData.province === 'Hà Nội' && (
                                    <>
                                        {hanoi.map((hn) => {
                                            return (
                                                <option key={hn} value="Ba Dình">
                                                    {hn}
                                                </option>
                                            );
                                        })}
                                    </>
                                )}
                                {formData.province === 'TP.Hồ Chí Minh' && (
                                    <>
                                        {tphcm.map((hcm) => {
                                            return (
                                                <option key={hcm} value={hcm}>
                                                    {hcm}
                                                </option>
                                            );
                                        })}
                                    </>
                                )}
                            </select>
                            <br />
                            <br />

                            <button type="submit" className={cx('submit_btn')}>
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className={cx('result')}>
                        <h2>Kết quả</h2>
                        <div className={cx('result_main')}>
                            <div>Số điện thoại:{formData.phone}</div>
                            <div>Email:{formData.email}</div>
                            <div>Tỉnh/Thành phố: {formData.province}</div>
                            <div>Quận/huyện: {formData.district}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
