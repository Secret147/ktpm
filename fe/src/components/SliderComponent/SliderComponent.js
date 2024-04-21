import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.module.scss';
import './Slider.css';
import { Link } from 'react-router-dom';

function SliderComponent({ arrImg, check = false }) {
    const url = ['/', '/cart', '/order', '/detail'];
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoSpeed: 1000,
    };
    let width = '100%';
    let height = '100%';
    if (check) {
        width = '100%';
        height = '100%';
    }

    return (
        <Slider {...settings}>
            {arrImg.map((image, index) => (
                <Link to={url[index]} key={index} className="custom">
                    <img src={image} key={index} alt="slider" width={width} height={height} />
                </Link>
            ))}
        </Slider>
    );
}

export default SliderComponent;
