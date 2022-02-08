import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

const AboutUsCarousel = () => {
    return (
        <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} showStatus={false} stopOnHover={true} interval={4000} showThumbs={false}>
                <div>
                    <img className="carouselImage" src="images/carousel/1.jpg" />
                </div>
                <div>
                    <img className="carouselImage" src="images/carousel/2.jpg" />
                </div>
                <div>
                    <img className="carouselImage" src="images/carousel/3.jpg" />
                </div>
                <div>
                    <img className="carouselImage" src="images/carousel/4.jpg" />
                </div>
                <div>
                    <img className="carouselImage" src="images/carousel/5.jpg" />
                </div>
                <div>
                    <img className="carouselImage" src="images/carousel/6.jpg" />
                </div>
        </Carousel>
    );
};

export default AboutUsCarousel;

