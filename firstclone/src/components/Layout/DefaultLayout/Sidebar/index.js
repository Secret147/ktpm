import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Sidebar() {
    // const [user, setUser] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:8080/new')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setUser(res);
    //         });
    // }, []);
    // console.log(user);
    // const deleteUser = (id) => {
    //     fetch(`http://localhost:8080/new/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then((res) => {
    //             if (res.ok) {
    //                 // Xóa thành công, cập nhật lại danh sách người dùng
    //                 fetch('http://localhost:8080/new')
    //                     .then((res) => res.json())
    //                     .then((res) => {
    //                         setUser(res);
    //                     });
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Lỗi khi xóa người dùng:', error);
    //         });
    // };
    // const editUser = (id, name, dob) => {
    //     const datUser = {
    //         id: id,
    //         name: name,
    //         dob: dob,
    //     };
    //     localStorage.setItem('userData', JSON.stringify(datUser));
    //     window.location.href = '/profile';
    // };
    return (
        // <aside className={cx('wrapper')}>
        //     {user.map((users) => (
        //         <>
        //             <p>{users.id}</p>
        //             <p>{users.name}</p>
        //             <p>{users.dob}</p>
        //             <button onClick={() => deleteUser(users.id)}>Xóa</button>
        //             <button onClick={() => editUser(users.id, users.name, users.dob)}>Edit</button>
        //         </>
        //     ))}
        // </aside>
        <div>test</div>
    );
}

export default Sidebar;
