import { Splide, SplideSlide } from 'https://esm.run/@splidejs/react-splide'
import './Carousel.css';

function Carousel({ items }) {
    console.log('Carousel items:', items);
    return (
        <center>
            <Splide>
                {items.map((item, index) => (
                    <SplideSlide key={index}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                    </SplideSlide>
                ))}
            </Splide>
        </center>
    );
}

export default Carousel;
