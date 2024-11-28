import React from "react";
import Link from "next/link";
import { tracks_hero_section } from "@/assets/data/dummydata";
import { HiOutlineArrowRight } from "react-icons/hi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Title } from "@/components/common/Title";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='slick-arrow'>
            <button 
                className='next' 
                onClick={onClick} 
                style={{ backgroundColor: '#28b0ff', color: 'white', border: 'none', borderRadius: '3rem', padding: '10px' }}
            >
                <RiArrowRightSLine size={25} />
            </button>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='slick-arrow'>
            <button 
                className='prev' 
                onClick={onClick} 
                style={{ backgroundColor: '#28b0ff', color: 'white', border: 'none', borderRadius: '3rem', padding: '10px' }}
            >
                <RiArrowLeftSLine size={25} />
            </button>
        </div>
    );
}

const Tracks_hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <>
            <section className='testimonial'>
                <div className='container'>
                    <div className='heading-title'>
                        <Title title='TRACKS' />
                    </div>
                    <div className='cards'>
                        <Slider {...settings}>
                            {tracks_hero_section.map((user) => (
                                <div key={user.track}>
                                    <div className='card'>
                                        <div className='image'>
                                            <div className='img'>
                                                <img src={user.cover} alt='' />
                                            </div>
                                            <div className='img-text'>
                                                <h3>{user.track}</h3>
                                            </div>
                                        </div>
                                        <div className='details'>
                                            <ul style={{ lineHeight: '2' }}>
                                                {user.desc.split('\n').map((point, index) => (
                                                    <li key={index}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className='container' style={{ textAlign: 'center', marginTop: '40px', padding: '30px 0' }}>
    <Link href='/Tracks'>
        <button className='button-primary2'>VIEW</button>
    </Link>
</div>
                </div>
            </section>
        </>
    );
};

export default Tracks_hero;