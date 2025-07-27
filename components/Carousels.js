import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from "react";
import './carousels.css';

export default function Carousels({slides}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        console.log('selected index: ', selectedIndex)
        setIndex(selectedIndex);
    };
    return (
        <div className="carousels">
            <div className="carousels-wrapper">
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon changed"/>}
                    className="custom-carousel"
                >
                    {slides.map((slide) => (
                        <Carousel.Item key={slide.image} interval={slide.interval}>
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt="First slide"
                            />
                            {/*<Carousel.Caption>*/}
                            {/*    <h3>{slide.title}</h3>*/}
                            {/*    <p>{slide.subTitle}</p>*/}
                            {/*</Carousel.Caption>*/}
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

        </div>
    )
}