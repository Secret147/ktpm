import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Input from '~/components/Input/Input';
import Button from '~/components/Button/Button';
import { useState } from 'react';
import Cookies from 'js-cookie';
import Form from '~/components/Form/Form';

const cx = classNames.bind(styles);

function Login() {
    const loginAPI = 'http://localhost:8001/api/customers/login/';
    const [customer, setCustomer] = useState({
        username: '',
        password: '',
        email: '',
        address: '',
        role: 0,
    });
    const [checkLogin, setCheckLogin] = useState(false);
    const [errors, setErrors] = useState('');
    const inputChange = (event) => {
        const { name, value } = event.target;
        setCustomer({ ...customer, [name]: value });
    };
    const handleSubmit = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(customer),
        };

        try {
            const response = await fetch(loginAPI, fetchOptions);
            if (!response.ok) {
                const error = await response.json();
                setCheckLogin(true);
                setErrors(error.message);
            } else {
                const responseData = await response.json();

                window.location.href = '/';
                Cookies.set('role', responseData.role, { expires: 1 / 24 });
                Cookies.set('user', responseData.username, { expires: 1 / 24 });
                Cookies.set('userId', responseData.id, { expires: 1 / 24 });
                setCheckLogin(false);
            }
        } catch (error) {
            console.error('An error occurred while logging in:', error);
            setCheckLogin(true);
        }
    };

    return (
        <Form title="Đăng nhập">
            <Input type="text" placeholder="Username" onChange={inputChange} name="username" />
            <Input type="password" placeholder="Password" onChange={inputChange} name="password" />
            {checkLogin ? (
                <div className={cx('error')}>
                    <p>{errors}</p>
                </div>
            ) : (
                <div></div>
            )}
            <div className={cx('btn_submit')}>
                <Button primary onClick={() => handleSubmit()}>
                    Đăng nhập
                </Button>
                <br></br>
                <div className={cx('question')}>
                    <span>Bạn chưa có tài khoản?</span>
                    <a href="/register">Đăng kí</a>
                </div>
            </div>
        </Form>
    );
}
export default Login;
