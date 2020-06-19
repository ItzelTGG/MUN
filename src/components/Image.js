import React from 'react'
import { Carousel } from 'react-bootstrap';

const Image = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block m-auto col-lg-10 col-md-7"
                        src="https://static.wixstatic.com/media/3e2f39_d8d256ab8d7e423da942b9b8817b9cf8~mv2.jpg/v1/fill/w_834,h_556,al_c,q_90/3e2f39_d8d256ab8d7e423da942b9b8817b9cf8~mv2.webp"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    
                        className="d-block m-auto col-lg-10 col-md-7"
                        src="https://static.wixstatic.com/media/3e2f39_790aab587cd9469fa2f68caa0a1259f8~mv2.jpg/v1/fill/w_834,h_556,al_c,q_90/3e2f39_790aab587cd9469fa2f68caa0a1259f8~mv2.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block m-auto col-lg-10 col-md-7"
                        src="https://static.wixstatic.com/media/3e2f39_9720d9189cb645989d585bfe971fb56e~mv2.jpg/v1/fill/w_834,h_556,al_c,q_90/3e2f39_9720d9189cb645989d585bfe971fb56e~mv2.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block m-auto col-lg-10 col-md-7"
                        src="https://static.wixstatic.com/media/3e2f39_16dc4f47952a43eeb105ed6f3f5f9d92~mv2.jpg/v1/fill/w_834,h_556,al_c,q_90/3e2f39_16dc4f47952a43eeb105ed6f3f5f9d92~mv2.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block m-auto col-lg-10 col-md-7"
                        src="https://static.wixstatic.com/media/3e2f39_edae6fdcf81644f7a22e3d948a5bda3d~mv2.jpg/v1/fill/w_834,h_556,al_c,q_90/3e2f39_edae6fdcf81644f7a22e3d948a5bda3d~mv2.webp"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Image;
