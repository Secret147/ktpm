import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Input from '~/components/Input/Input';
import Form from '~/components/Form/Form';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const customerAPI = 'http://localhost:8001/api/customers/';
    const [user, setUser] = useState({
        name: '',
        password: '',
        email: '',
        address: '',
        role: 0,
    });
    const [errors, setErrors] = useState('');
    const [checkSignup, setCheckSignup] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const handleSubmit = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        };
        const response = await fetch(customerAPI, fetchOptions);
        if (!response.ok) {
            const error = await response.json();
            setCheckSignup(true);
            setErrors(error.message);
        } else {
            window.location.href = '/';
        }
    };

    return (
        <Form title="Đăng ký">
            <Input
                type="text"
                placeholder="Username"
                onChange={handleInputChange}
                name="username"
                value={user.username}
            />
            <Input
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                name="password"
                value={user.password}
            />

            <Input type="text" placeholder="Email" onChange={handleInputChange} name="email" value={user.email} />
            <Input type="text" placeholder="Address" onChange={handleInputChange} name="address" value={user.address} />
            {checkSignup ? (
                <div className={cx('error')}>
                    <p>{errors}</p>
                </div>
            ) : (
                <div></div>
            )}
            <div className={cx('btn_submit')}>
                <Button primary type="submit" onClick={() => handleSubmit()}>
                    Đăng ký
                </Button>
                <br />
                <div className={cx('question')}>
                    <span>Bạn đã có tài khoản?</span>
                    <a href="/login">Đăng nhập</a>
                </div>
            </div>
        </Form>
    );
}

export default Register;
