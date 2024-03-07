import { useState, useEffect } from 'react';

function Profile({ userId }) {
    // const userData = JSON.parse(localStorage.getItem('userData'));
    // const [user, setUser] = useState({
    //     id: userData.id,
    //     name: userData.name,
    //     dob: userData.dob,
    // });

    // useEffect(() => {
    //     fetch(`http://localhost:8080/new`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setUser(data);
    //         })
    //         .catch((error) => {
    //             console.error('Lỗi khi lấy thông tin người dùng:', error);
    //         });
    // }, []);

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setUser({ ...user, [name]: value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     fetch(`http://localhost:8080/new`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(user),
    //     })
    //         .then((res) => res.json())
    //         .then((res) => {
    //             if (res.ok) {
    //                 alert('Thafnh cong');
    //                 window.location.href = '/';
    //                 localStorage.clear();
    //             }

    //             // Xử lý kết quả sau khi cập nhật thành công
    //         })
    //         .catch((error) => {
    //             alert('That bai');
    //         });
    // };

    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="text" name="id" value={user.id} onChange={handleInputChange} placeholder="id" />
        //     <input
        //         type="text"
        //         name="name"
        //         value={user.name}
        //         onChange={handleInputChange}
        //         placeholder="Tên người dùng"
        //     />
        //     <input type="date" name="dob" value={user.dob} onChange={handleInputChange} placeholder="Ngày sinh" />

        //     <button type="submit">Lưu</button>
        // </form>
        <div>test</div>
    );
}

export default Profile;
