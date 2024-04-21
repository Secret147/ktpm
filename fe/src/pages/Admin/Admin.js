import Button from '~/components/Button/Button';
import styles from './Admin.module.scss';
import classNames from 'classnames/bind';
import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
function Admin() {
    const [checkAdd, setCheckAdd] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [checkEdit, setCheckEdit] = useState(false);
    const [newUser, setNewUser] = useState({
        username: '',
        address: '',
        password: '',
        email: '',
        role: '',
    });
    const [eUser, setEUser] = useState({
        username: '',
        address: '',
        password: '',
        email: '',
        role: '',
    });
    const getAll = () => {
        fetch('http://localhost:8000/api/customers/')
            .then((res) => res.json())
            .then((res) => {
                setCustomers(res);
            });
    };
    useEffect(() => {
        getAll();
    }, []);

    const deleteUser = async (id) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8000/api/customers/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
        } else {
            alert('Fail');
        }
    };
    const editUser = async (id) => {
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(eUser),
        };
        const response = await fetch(`http://localhost:8000/api/customers/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
            setCheckEdit(false);
        } else {
            alert('Fail');
        }
    };
    const turnAdd = () => {
        setCheckAdd(true);
        setCheckEdit(false);
    };
    const offAdd = () => {
        setCheckAdd(false);
        localStorage.removeItem('userid');
    };
    const turnEdit = (userid) => {
        setCheckEdit(true);
        fetch(`http://localhost:8000/api/customers/${userid}`)
            .then((res) => res.json())
            .then((res) => {
                setEUser(res);
            });
    };
    const offEdit = () => {
        setCheckEdit(false);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };
    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEUser({ ...eUser, [name]: value });
    };
    const addUser = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        };
        const response = await fetch('http://localhost:8000/api/customers/', fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
            setCheckAdd(false);
        } else {
            const error = await response.text();
            alert(error);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('header')}>
                    <div className={cx('header_main')}>
                        <p>Quản lý tài khoản</p>
                        <div className={cx('add')}>
                            <Button primary fullwidth onClick={() => turnAdd()}>
                                Thêm mới tài khoản
                            </Button>
                        </div>
                    </div>
                    {checkAdd ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')} onChange={handleChange}>
                                    <p>Tên đăng nhập</p>
                                    <input type="text" placeholder="Username" name="username"></input>
                                </div>
                                <div className={cx('add_item')} onChange={handleChange}>
                                    <p>Mật khẩu</p>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        name="password"
                                    ></input>
                                </div>

                                <div className={cx('add_item')}>
                                    <p>Số điện thoại</p>
                                    <input type="text" placeholder="Email" onChange={handleChange} name="email"></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Địa chỉ</p>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        onChange={handleChange}
                                        name="address"
                                    ></input>
                                </div>
                                <div className={cx('add_item')} onChange={handleChange}>
                                    <p>Role</p>
                                    <input type="text" placeholder="Role" name="role"></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => addUser()}>
                                        Tạo tài khoản
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offAdd()}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {/* -------------------------------------Edit--------------------------------------------------------- */}
                    {checkEdit ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên đăng nhập</p>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name="username"
                                        defaultValue={eUser.username}
                                        onChange={handleEditChange}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mật khẩu</p>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        onChange={handleEditChange}
                                        name="password"
                                        defaultValue={eUser.password}
                                    ></input>
                                </div>

                                <div className={cx('add_item')}>
                                    <p>Số điện thoại</p>
                                    <input
                                        type="text"
                                        placeholder="Numberphone"
                                        onChange={handleEditChange}
                                        name="email"
                                        defaultValue={eUser.email}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Địa chỉ</p>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        onChange={handleEditChange}
                                        name="address"
                                        defaultValue={eUser.address}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Role</p>
                                    <input
                                        type="text"
                                        placeholder="Role"
                                        name="role"
                                        defaultValue={eUser.role}
                                        onChange={handleEditChange}
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => editUser(eUser.id)}>
                                        Xác nhận
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offEdit()}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className={cx('container')}>
                    <div className={cx('container_main')}>
                        {customers.map((customer) => {
                            return (
                                <div className={cx('account_item')} key={customer.id}>
                                    <div className={cx('name', 'account')}>
                                        <p>{customer.username}</p>
                                    </div>
                                    <div className={cx('password', 'account')}>
                                        <p>{customer.email}</p>
                                    </div>
                                    <div className={cx('role', 'account')}>
                                        <p>Role: {customer.role}</p>
                                    </div>
                                    <div className={cx('edit')} onClick={() => turnEdit(customer.id)}>
                                        <FontAwesomeIcon icon={faUserPen} />
                                        <p>Edit</p>
                                    </div>
                                    <div className={cx('edit')} onClick={() => deleteUser(customer.id)}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                        <p>Delete</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admin;
