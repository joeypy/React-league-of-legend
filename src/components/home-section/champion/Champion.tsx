import './champion.scss';

import { HomeSection } from '../';
import ChampionCard from './ChampionCard';

import { bg2 } from '../../../assets/images';
import { championsData } from '../../../assets/dummy';

import { Swiper, SwiperSlide } from 'swiper/react';

const Champion = (props: any) => {
    return (
        <HomeSection
            className={`champion ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay"
            bgImage={bg2}
        >
            <div className="container relative">
                <div className="champion-list">
                    <Swiper slidesPerView={4} spaceBetween={0} grabCursor={true} nested={true}>
                        {championsData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ChampionCard item={item} id={index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </HomeSection>
    );
};

export default Champion;
