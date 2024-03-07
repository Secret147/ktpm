import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import { faAdd, faTrashCan, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '~/components/Layout/Header';

const cx = classNames.bind(styles);

function Home() {
    const [checkAdd, setCheckAdd] = useState(false);
    const [products, setProducts] = useState([]);
    const [checkEdit, setCheckEdit] = useState(false);
    const [checkItem, setCheckitem] = useState(false);
    const [newProduct, setnewProduct] = useState([]);
    const [books,setBooks] = useState([]);
    const [checkSearch,setCheckSearch] = useState(false);
    const [eProduct, seteProduct] = useState({
        name: '',
        memory: '',
        description: '',
        img: '',
        price: '',
        type: '',
    });
    
    const getAll = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/books/');
        setProducts(response.data);
        if(books.length>0){
            setProducts(books);
        }
    };
  

    const deleteProduct = async (id) => {
        const fetchOptions = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(`http://localhost:8080/product/${id}`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
        } else {
            alert('Fail');
        }
    };

    const addToCart = async (id) => {
        const data = {
            total: 1,
            book_id: id,
            order: null,
            customer: null,
        };
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch(`http://127.0.0.1:8000/api/carts/`, fetchOptions);
        if (response.ok) {
            alert('Success');
            window.location.href = 'cart';
        }
    };

    
    const editUser = async () => {
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(eProduct),
        };
        const response = await fetch(`http://localhost:8080/product/new`, fetchOptions);
        if (response.ok) {
            alert('Success');
            getAll();
            setCheckEdit(false);
        } else {
            alert('Fail');
        }
    };

    const addUser = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/books/search/?keywords=${newProduct.name+ "+" + newProduct.title + "+" + newProduct.year+ "+" +newProduct.description+ "+" + newProduct.language}/`);
        setBooks(response.data);
        setCheckAdd(false);
     
    };

    const turnEdit = (productid) => {
        setCheckEdit(true);
        fetch(`http://localhost:8080/productid/${productid}`)
            .then((res) => res.json())
            .then((res) => {
                seteProduct(res);
            });
    };

    useEffect(() => {
        getAll();
    }, [books]);
   
    useEffect(() => {
        if (products.length > 0) {
            setCheckitem(true);
        } else {
            setCheckitem(false);
        }
    }, [products]);

    const turnAdd = () => {
        setCheckAdd(true);
        setCheckEdit(false);
        setBooks([]);
    };
    const offAdd = () => {
        setCheckAdd(false);
        localStorage.removeItem('userid');
    };
    
    const offEdit = () => {
        setCheckEdit(false);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setnewProduct({ ...newProduct, [name]: value });
    };
    const handleEditChange = (event) => {
        const { name, value } = event.target;
        seteProduct({ ...eProduct, [name]: value });
    };
    
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('main')}>
                <div className={cx('header')}>
                    <div className={cx('header_main')}>
                        <p>Quản lý sản phẩm</p>
                        <div className={cx('add')}>
                            <Button primary fullwidth onClick={() => turnAdd()}>
                                 Tìm kiếm sách
                            </Button>
                        </div>
                    </div>
                    {checkAdd ? (
                        <div className={cx('add_account')}>
                            <div className={cx('add_account_main')}>
                                <div className={cx('add_item')}>
                                    <p>Tên sách</p>
                                    <input type="text" placeholder="name" name="name" onChange={handleChange}></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Tác giả</p>
                                    <input
                                        type="text"
                                        placeholder="author"
                                        onChange={handleChange}
                                        name="title"
                                    ></input>
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
                                    <p>Năm phát hành</p>
                                    <input type="text" placeholder="year" onChange={handleChange} name="year"></input>
                                </div>
                                
                                <div className={cx('add_item')}>
                                    <p>Ngôn ngữ</p>
                                    <input type="text" placeholder="type" name="language" onChange={handleChange}></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    <Button primary fullwidth onClick={() => addUser()}>
                                        Tìm kiếm
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
                                        onChange={handleChange}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Bộ nhớ</p>
                                    <input
                                        type="text"
                                        placeholder="memory"
                                        onChange={handleEditChange}
                                        name="memory"
                                        defaultValue={eProduct.memory}
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
                                        name="img"
                                        defaultValue={eProduct.img}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Giá thành</p>
                                    <input
                                        type="text"
                                        placeholder="price"
                                        onChange={handleEditChange}
                                        name="price"
                                        defaultValue={eProduct.price}
                                    ></input>
                                </div>
                                <div className={cx('add_item')}>
                                    <p>Loại</p>
                                    <input
                                        type="text"
                                        placeholder="type"
                                        name="type"
                                        defaultValue={eProduct.type}
                                        onChange={handleChange}
                                    ></input>
                                </div>
                            </div>
                            <div className={cx('button')}>
                                <div className={cx('accept')}>
                                    {
                                        <Button primary fullwidth onClick={() => editUser(eProduct.id)}>
                                            Xác nhận
                                        </Button>
                                    }
                                </div>
                                <div className={cx('accept2')}>
                                    {
                                        <Button normal large onClick={() => offEdit()}>
                                            Đóng
                                        </Button>
                                    }
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
                            {products.map((product) => {
                                return (
                                    <div className={cx('product_item')} key={product.id}>
                                        <div className={cx('img')}>
                                            <img src={product.image} alt="anh"></img>
                                        </div>
                                        <div className={cx('name')}>
                                            <p className={cx('name_product')}>{product.name}</p>
                                            <p>- {product.title}</p>
                                        </div>
                                        <div className={cx('price')}>
                                            <p>{product.year}</p>
                                        </div>
                                        {/* <div className={cx('edit')} onClick={() => turnEdit(product.id)}>
                                            <FontAwesomeIcon icon={faUserPen} />
                                            <p>Edit</p>
                                        </div> */}
                                        <div className={cx('edit')} onClick={() => addToCart(product.id)}>
                                            <FontAwesomeIcon icon={faAdd} />
                                            <p>Add to Cart</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
