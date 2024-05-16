import Button from '~/components/Button/Button';
import styles from './Product.module.scss';
import classNames from 'classnames/bind';

import { faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Product() {
    const [checkAdd, setCheckAdd] = useState(false);
    const [checkAddMobile, setCheckAddMobile] = useState(false);
    const [checkAddClothes, setCheckAddClothes] = useState(false);
    const [products, setProducts] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [clothes, setClothes] = useState([]);
    const [checkEdit, setCheckEdit] = useState(false);
    const [checkEditMobile, setCheckEditMobile] = useState(false);
    const [checkEditClothes, setCheckEditClothes] = useState(false);
    const [checkItem, setCheckitem] = useState(false);
    const [newProduct, setnewProduct] = useState({
        name: '',
        title: '',
        description: '',
        image: '',
    });
    const [mobile, setMobile] = useState({
        name: '',
        type: '',
        description: '',
        image: '',
    });
    const [clothe, setClothe] = useState({
        name: '',
        style: '',
        description: '',
        image: '',
    });

    const [eProduct, seteProduct] = useState({
        name: '',
        title: '',
        description: '',
        image: '',
    });
    const [eMobile, seteMobile] = useState({
        name: '',
        type: '',
        description: '',
        image: '',
    });
    const [eClothes, seteClothes] = useState({
        name: '',
        style: '',
        description: '',
        image: '',
    });

    const getAllMobile = () => {
        fetch('http://localhost:8008/api/mobiles/')
            .then((res) => res.json())
            .then((res) => {
                setMobiles(res);
            });
    };
    const getAllClothes = () => {
        fetch('http://localhost:8008/api/clothes/')
            .then((res) => res.json())
            .then((res) => {
                setClothes(res);
            });
    };
    const getAll = () => {
        fetch('http://localhost:8008/api/books/')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            });
    };
    useEffect(() => {
        getAll();
        getAllClothes();
        getAllMobile();
    }, []);

    const deleteProduct = async (id) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8008/api/books/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
        } else {
            alert('Fail');
        }
    };
    const deleteMobile = async (id) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8008/api/mobiles/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAllMobile();
        } else {
            alert('Fail');
        }
    };
    const deleteClothes = async (id) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8008/api/clothes/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAllClothes();
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
            body: JSON.stringify(eProduct),
        };
        const response = await fetch(`http://localhost:8008/api/books/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
            seteProduct({
                name: '',
                title: '',
                description: '',
                image: '',
            });
            setCheckEdit(false);
        } else {
            alert('Fail');
        }
    };
    const editMobile = async (id) => {
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(eMobile),
        };
        const response = await fetch(`http://localhost:8008/api/mobiles/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAllMobile();
            seteProduct({
                name: '',
                type: '',
                description: '',
                image: '',
            });
            setCheckEditMobile(false);
        } else {
            alert('Fail');
        }
    };

    const editClothes = async (id) => {
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(eClothes),
        };
        const response = await fetch(`http://localhost:8008/api/clothes/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAllClothes();
            seteProduct({
                name: '',
                style: '',
                description: '',
                image: '',
            });
            setCheckEditClothes(false);
        } else {
            alert('Fail');
        }
    };

    const turnAdd = () => {
        setCheckAdd(true);
        setCheckAddClothes(false);
        setCheckAddMobile(false);
        setCheckEdit(false);
    };
    const offAdd = () => {
        setCheckAdd(false);
        localStorage.removeItem('userid');
    };
    const turnAddMobile = () => {
        setCheckAddMobile(true);
        setCheckAddClothes(false);
        setCheckAdd(false);
        setCheckEdit(false);
    };
    const offAddMobile = () => {
        setCheckAddMobile(false);
        localStorage.removeItem('userid');
    };
    const turnAddClothes = () => {
        setCheckAddClothes(true);
        setCheckAddMobile(false);

        setCheckAdd(false);
        setCheckEdit(false);
    };
    const offAddClothes = () => {
        setCheckAddClothes(false);
        localStorage.removeItem('userid');
    };
    const turnEdit = (productid) => {
        setCheckEdit(true);
        setCheckEditMobile(false);
        setCheckEditClothes(false);
        fetch(`http://localhost:8008/api/books/${productid}`)
            .then((res) => res.json())
            .then((res) => {
                seteProduct(res);
            });
    };

    const turnEditMobile = (productid) => {
        setCheckEditMobile(true);
        setCheckEdit(false);
        setCheckAddClothes(false);
        fetch(`http://localhost:8008/api/mobiles/${productid}`)
            .then((res) => res.json())
            .then((res) => {
                seteMobile(res);
            });
    };

    const turnEditClothes = (productid) => {
        setCheckEditClothes(true);
        setCheckEdit(false);
        setCheckEditMobile(false);
        fetch(`http://localhost:8008/api/clothes/${productid}`)
            .then((res) => res.json())
            .then((res) => {
                seteClothes(res);
            });
    };
    const offEditMobile = () => {
        setCheckEditMobile(false);
        seteMobile({
            name: '',
            type: '',
            description: '',
            image: '',
        });
    };
    const offEditClothes = () => {
        setCheckEditClothes(false);
        seteClothes({
            name: '',
            style: '',
            description: '',
            image: '',
        });
    };
    const offEdit = () => {
        setCheckEdit(false);
        seteProduct({
            name: '',
            title: '',
            description: '',
            image: '',
        });
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setnewProduct({ ...newProduct, [name]: value });
    };
    const handleChangeMobile = (event) => {
        const { name, value } = event.target;
        setMobile({ ...mobile, [name]: value });
    };
    const handleChangeClothes = (event) => {
        const { name, value } = event.target;
        setClothe({ ...clothe, [name]: value });
    };
    const handleEditChange = (event) => {
        const { name, value } = event.target;
        seteProduct({ ...eProduct, [name]: value });
    };
    const handleEditChangeMobile = (event) => {
        const { name, value } = event.target;
        seteMobile({ ...eMobile, [name]: value });
    };

    const handleEditChangeClothes = (event) => {
        const { name, value } = event.target;
        seteClothes({ ...eClothes, [name]: value });
    };

    const addUser = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        };
        const response = await fetch('http://localhost:8008/api/books/', fetchOptions);
        if (response.ok) {
            alert('Add Book Success');
            getAll();
            setCheckAdd(false);
        } else {
            alert('Sản phẩm book đã tồn tại');
        }
    };
    useEffect(() => {
        if (products.length > 0) {
            setCheckitem(true);
        } else {
            setCheckitem(false);
        }
    }, [products]);
    const addMobile = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(mobile),
        };
        const response = await fetch('http://localhost:8008/api/mobiles/', fetchOptions);
        if (response.ok) {
            alert('Add Mobile Success');
            getAllMobile();
            setCheckAddMobile(false);
        } else {
            alert('Sản phẩm Mobile đã tồn tại');
        }
    };
    const addClothes = async () => {
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(clothe),
        };
        const response = await fetch('http://localhost:8008/api/clothes/', fetchOptions);
        if (response.ok) {
            alert('Add Clothes Success');
            getAllClothes();
            setCheckAddClothes(false);
        } else {
            alert('Sản phẩm Clothes đã tồn tại');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('main')}>
                <div className={cx('header')}>
                    <div className={cx('header_main')}>
                        <p>Quản lý sản phẩm</p>
                        <div className={cx('button_header_add')}>
                            <div className={cx('add')}>
                                <Button primary onClick={() => turnAdd()}>
                                    Add book
                                </Button>
                            </div>
                            <div className={cx('add')}>
                                <Button primary onClick={() => turnAddMobile()}>
                                    Add mobile
                                </Button>
                            </div>
                            <div className={cx('add')}>
                                <Button primary onClick={() => turnAddClothes()}>
                                    Add clothes
                                </Button>
                            </div>
                        </div>
                    </div>
                    {checkAdd ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên sản phẩm</p>
                                    <input type="text" placeholder="name" name="name" onChange={handleChange}></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Title</p>
                                    <input type="text" placeholder="title" onChange={handleChange} name="title"></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mô tả</p>
                                    <input
                                        type="text"
                                        placeholder="description"
                                        onChange={handleChange}
                                        name="description"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Hình ảnh</p>
                                    <input type="text" placeholder="image" onChange={handleChange} name="image"></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => addUser()}>
                                        Thêm sản phẩm
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
                    {checkAddMobile ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên sản phẩm</p>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        onChange={handleChangeMobile}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Type</p>
                                    <input
                                        type="text"
                                        placeholder="type"
                                        onChange={handleChangeMobile}
                                        name="type"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mô tả</p>
                                    <input
                                        type="text"
                                        placeholder="description"
                                        onChange={handleChangeMobile}
                                        name="description"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Hình ảnh</p>
                                    <input
                                        type="text"
                                        placeholder="image"
                                        onChange={handleChangeMobile}
                                        name="image"
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => addMobile()}>
                                        Thêm sản phẩm
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offAddMobile()}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {checkAddClothes ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên sản phẩm</p>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        onChange={handleChangeClothes}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Style</p>
                                    <input
                                        type="text"
                                        placeholder="style"
                                        onChange={handleChangeClothes}
                                        name="style"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mô tả</p>
                                    <input
                                        type="text"
                                        placeholder="description"
                                        onChange={handleChangeClothes}
                                        name="description"
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Hình ảnh</p>
                                    <input
                                        type="text"
                                        placeholder="image"
                                        onChange={handleChangeClothes}
                                        name="image"
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => addClothes()}>
                                        Thêm sản phẩm
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offAddClothes()}>
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
                                    <p>Tên sản phẩm</p>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        defaultValue={eProduct.name}
                                        onChange={handleEditChange}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Title</p>
                                    <input
                                        type="text"
                                        placeholder="title"
                                        onChange={handleEditChange}
                                        name="type"
                                        defaultValue={eProduct.title}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mô tả</p>
                                    <input
                                        type="text"
                                        placeholder="description"
                                        onChange={handleEditChange}
                                        name="description"
                                        defaultValue={eProduct.description}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Hình ảnh</p>
                                    <input
                                        type="text"
                                        placeholder="image"
                                        onChange={handleEditChange}
                                        name="image"
                                        defaultValue={eProduct.image}
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => editUser(eProduct.id)}>
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
                    {checkEditMobile ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên sản phẩm</p>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        defaultValue={eMobile.name}
                                        onChange={handleEditChangeMobile}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Type</p>
                                    <input
                                        type="text"
                                        placeholder="type"
                                        onChange={handleEditChangeMobile}
                                        name="type"
                                        defaultValue={eMobile.type}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mô tả</p>
                                    <input
                                        type="text"
                                        placeholder="description"
                                        onChange={handleEditChangeMobile}
                                        name="description"
                                        defaultValue={eMobile.description}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Hình ảnh</p>
                                    <input
                                        type="text"
                                        placeholder="image"
                                        onChange={handleEditChangeMobile}
                                        name="image"
                                        defaultValue={eMobile.image}
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => editMobile(eMobile.id)}>
                                        Xác nhận
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offEditMobile()}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    {checkEditClothes ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên sản phẩm</p>
                                    <input
                                        type="text"
                                        placeholder="name"
                                        name="name"
                                        defaultValue={eClothes.name}
                                        onChange={handleEditChangeClothes}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Style</p>
                                    <input
                                        type="text"
                                        placeholder="style"
                                        onChange={handleEditChangeClothes}
                                        name="style"
                                        defaultValue={eClothes.style}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Mô tả</p>
                                    <input
                                        type="text"
                                        placeholder="description"
                                        onChange={handleEditChangeClothes}
                                        name="description"
                                        defaultValue={eClothes.description}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Hình ảnh</p>
                                    <input
                                        type="text"
                                        placeholder="image"
                                        onChange={handleEditChangeClothes}
                                        name="image"
                                        defaultValue={eClothes.image}
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => editClothes(eClothes.id)}>
                                        Xác nhận
                                    </Button>
                                </div>
                                <div className={cx('accept2')}>
                                    <Button normal large onClick={() => offEditClothes()}>
                                        Đóng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                {/* -------------------------------------container-------------------------------------------- */}
                <div className={cx('container')}>
                    {checkItem ? (
                        <div className={cx('container_main')}>
                            <div className={cx('type_product')}>
                                <p>Book</p>
                            </div>
                            <div>
                                {products.map((product) => {
                                    return (
                                        <div className={cx('product_item')} key={product.id}>
                                            <div className={cx('img')}>
                                                <img src={product.image} alt="anh"></img>
                                            </div>
                                            <div className={cx('name')}>
                                                <p className={cx('name_product')}>{product.name}</p>
                                                <p> - {product.title}</p>
                                            </div>
                                            {/* <div className={cx('price')}>
                                            <p>{formatNumber(product.price)} đ</p>
                                        </div> */}
                                            <div className={cx('edit')} onClick={() => turnEdit(product.id)}>
                                                <FontAwesomeIcon icon={faUserPen} />
                                                <p>Edit</p>
                                            </div>
                                            <div className={cx('edit')} onClick={() => deleteProduct(product.id)}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                                <p>Delete</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={cx('type_product')}>
                                <p>Mobile</p>
                            </div>
                            <div>
                                {mobiles.map((product) => {
                                    return (
                                        <div className={cx('product_item')} key={product.id}>
                                            <div className={cx('img')}>
                                                <img src={product.image} alt="anh"></img>
                                            </div>
                                            <div className={cx('name')}>
                                                <p className={cx('name_product')}>{product.name}</p>
                                                <p> - {product.type}</p>
                                            </div>
                                            {/* <div className={cx('price')}>
                                            <p>{formatNumber(product.price)} đ</p>
                                        </div> */}
                                            <div className={cx('edit')} onClick={() => turnEditMobile(product.id)}>
                                                <FontAwesomeIcon icon={faUserPen} />
                                                <p>Edit</p>
                                            </div>
                                            <div className={cx('edit')} onClick={() => deleteMobile(product.id)}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                                <p>Delete</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={cx('type_product')}>
                                <p>Clothes</p>
                            </div>
                            <div>
                                {clothes.map((product) => {
                                    return (
                                        <div className={cx('product_item')} key={product.id}>
                                            <div className={cx('img')}>
                                                <img src={product.image} alt="anh"></img>
                                            </div>
                                            <div className={cx('name')}>
                                                <p className={cx('name_product')}>{product.name}</p>
                                                <p> - {product.style}</p>
                                            </div>
                                            {/* <div className={cx('price')}>
                                            <p>{formatNumber(product.price)} đ</p>
                                        </div> */}
                                            <div className={cx('edit')} onClick={() => turnEditClothes(product.id)}>
                                                <FontAwesomeIcon icon={faUserPen} />
                                                <p>Edit</p>
                                            </div>
                                            <div className={cx('edit')} onClick={() => deleteClothes(product.id)}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                                <p>Delete</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default Product;
